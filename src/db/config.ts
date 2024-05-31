import { Sequelize } from 'sequelize-typescript';

import { configuration } from '../config/configuration';
import models from './models';

export const sequelize = new Sequelize(
  configuration.db.database,
  configuration.db.user,
  configuration.db.password,
  {
    host: configuration.db.host,
    port: configuration.db.port,
    ssl: configuration.db.ssl,
    models: models,
    dialect: 'postgres',
    modelMatch: (filename, member) => {
      return (
        filename.substring(0, filename.indexOf('.model')) ===
        member.toLowerCase()
      );
    },
  },
);

export const sequelizeInit = async () => {
  if (configuration.env === 'development') {
    try {
      await sequelize.sync({ alter: true });
      console.log('Connection has been established successfully development.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  if (configuration.env === 'production') {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database prod', error);
    }
  }
};
