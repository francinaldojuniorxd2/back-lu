import request from 'supertest';
import path from 'path';

let file: string;

describe('files', () => {
  it('should return file id!', async () => {
    const dotPathfile = path.resolve(__dirname, './files/01.pdf');
    await request('http://localhost:8001')
      .post('/upload')
      .attach('file', dotPathfile)
      .expect(200)
      .then((response: any) => {
        file = response.body;
      });
  });
  it(`should return file! `, async () => {
    await request('http://localhost:8001').get(`/files/${file}`).expect(200);
  });
});
