"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelizeTypescript = require("sequelize-typescript");
var _invoiceValues = _interopRequireDefault(require("./invoice-values.model"));
var _file = _interopRequireDefault(require("./file.model"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
let Invoice = exports.default = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'invoice',
  underscored: true,
  timestamps: true,
  indexes: [{
    unique: true,
    fields: ['num_client', 'date_number']
  }]
}), _dec2 = (0, _sequelizeTypescript.Column)({
  field: 'id',
  type: _sequelizeTypescript.DataType.UUID,
  defaultValue: _sequelizeTypescript.Sequelize.fn('gen_random_uuid'),
  unique: true,
  primaryKey: true,
  allowNull: false
}), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _sequelizeTypescript.Column)({
  field: 'moth_ref',
  type: _sequelizeTypescript.DataType.TEXT,
  allowNull: false
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _sequelizeTypescript.Column)({
  field: 'date_number',
  type: _sequelizeTypescript.DataType.INTEGER,
  allowNull: true
}), _dec7 = Reflect.metadata("design:type", Number), _dec8 = (0, _sequelizeTypescript.Column)({
  field: 'num_client',
  type: _sequelizeTypescript.DataType.BIGINT,
  allowNull: false
}), _dec9 = Reflect.metadata("design:type", Number), _dec10 = (0, _sequelizeTypescript.Column)({
  field: 'num_install',
  type: _sequelizeTypescript.DataType.BIGINT,
  allowNull: false
}), _dec11 = Reflect.metadata("design:type", Number), _dec12 = (0, _sequelizeTypescript.Column)({
  field: 'created_at',
  type: _sequelizeTypescript.DataType.DATE,
  defaultValue: _sequelizeTypescript.Sequelize.fn('NOW'),
  allowNull: true
}), _dec13 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec14 = (0, _sequelizeTypescript.Column)({
  field: 'updated_at',
  type: _sequelizeTypescript.DataType.DATE,
  defaultValue: _sequelizeTypescript.Sequelize.fn('NOW'),
  allowNull: true
}), _dec15 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec16 = (0, _sequelizeTypescript.HasOne)(() => _file.default, 'invoice_id'), _dec17 = Reflect.metadata("design:type", typeof _file.default === "undefined" ? Object : _file.default), _dec18 = (0, _sequelizeTypescript.HasMany)(() => _invoiceValues.default, 'invoice_id'), _dec19 = Reflect.metadata("design:type", Array), _dec(_class = (_class2 = class Invoice extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "mothRef", _descriptor2, this);
    _initializerDefineProperty(this, "dateNumber", _descriptor3, this);
    _initializerDefineProperty(this, "numClient", _descriptor4, this);
    _initializerDefineProperty(this, "numInstall", _descriptor5, this);
    _initializerDefineProperty(this, "createdAt", _descriptor6, this);
    _initializerDefineProperty(this, "updatedAt", _descriptor7, this);
    _initializerDefineProperty(this, "file", _descriptor8, this);
    _initializerDefineProperty(this, "invoiceValues", _descriptor9, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mothRef", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dateNumber", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numClient", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numInstall", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "file", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "invoiceValues", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);