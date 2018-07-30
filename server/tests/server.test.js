const request = require('supertest');

const app = require('../index.js');

describe('Check Default Endpoint', () => {
  it('should return status code of 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});