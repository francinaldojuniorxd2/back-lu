import request from 'supertest';

describe('invoice', () => {
  it(`should return returns! `, async () => {
    await request('http://localhost:8001')
      .get(`/invoice/7005`)
      .expect(200)
      .then((response: any) => {
        console.log(response.body);
      });
  });
});
