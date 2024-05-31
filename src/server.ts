import express from 'express';
import cors from 'cors';

import routers from './routers/routers';

const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());

routers.forEach((route) => {
  server.use(route.path, route.component);
});
export default server;
