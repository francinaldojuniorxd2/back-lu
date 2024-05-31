"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelizeInit = exports.sequelize = void 0;
var _sequelizeTypescript = require("sequelize-typescript");
var _configuration = require("../config/configuration");
var _models = _interopRequireDefault(require("./models"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const sequelize = exports.sequelize = new _sequelizeTypescript.Sequelize(_configuration.configuration.db.database, _configuration.configuration.db.user, _configuration.configuration.db.password, {
  host: _configuration.configuration.db.host,
  port: _configuration.configuration.db.port,
  ssl: _configuration.configuration.db.ssl,
  models: _models.default,
  dialect: 'postgres',
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  }
});
const sequelizeInit = async () => {
  if (_configuration.configuration.env === 'development') {
    try {
      await sequelize.sync({
        alter: true
      });
      console.log('Connection has been established successfully development.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  if (_configuration.configuration.env === 'production') {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database prod', error);
    }
  }
};
exports.sequelizeInit = sequelizeInit;