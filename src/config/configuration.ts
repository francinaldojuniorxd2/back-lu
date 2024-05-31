import { Configuration } from '../entity/configuration';

export const configuration: Configuration = {
  pathDir: '/files',
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || 'zyngo-user',
    password: process.env.DB_PASSWORD || 'zyngo-pass001018',
    database: process.env.DATABASE || 'zyngo',
    ssl: process.env.DB_SSL === 'true',
  },
};
