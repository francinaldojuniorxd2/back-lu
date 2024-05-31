import { sequelizeInit } from './db/config';
import server from './server';

sequelizeInit();

server.listen(8001);
