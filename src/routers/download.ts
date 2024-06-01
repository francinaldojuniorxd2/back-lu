import { Router } from 'express';
export const router = Router();

router.get('/files/:filename', (request, response) => {
  response.header(
    `Content-Disposition: attachment; filename=${request.params.filename}`,
  );
  response.sendFile(`/files/${request.params.filename}`);
});

export default router;
