import Router from 'express';
const router = Router();

router.get('/check', (_, response) => {
  response.send('OK');
});

export default router;
