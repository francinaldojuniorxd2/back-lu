import express from 'express';
import cors from 'cors';

import routers from './routers';

const server = express();

server.use(cors());
server.options('*', cors());

server.use(express.json());

server.use('/', routers);

export default server;
