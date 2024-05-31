interface DataBaseOptions {}

export interface Configuration {
  pathDir: string;
  env: string;
  db: {
    database: string;
    user: string;
    password: string;
    host: string;
    port: number;
    ssl: boolean;
  };
}
