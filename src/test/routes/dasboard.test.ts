import request from 'supertest';

describe('invoice', () => {
  it(`should return returns! `, async () => {
    await request('http://localhost:8001')
      .get(`/invoice/dashboard/7005400387`)
      .expect(200)
      .then((response: any) => {
        console.log(response.body);
      });
  });
});
