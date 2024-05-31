import upload from './upload';
import download from './download';
import invoice from './invoice';

const routers = [
  {
    path: '/upload',
    component: upload,
  },
  {
    path: '/files',
    component: download,
  },
  {
    path: '/invoice',
    component: invoice,
  },
];

export default routers;
