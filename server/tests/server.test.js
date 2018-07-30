const request = require('supertest');

const app = require('../index.js');

describe('Check Default Endpoint', () => {
  it('should return status code of 200', () => {
    request(app).get('/').expect(200);
  });
});

// describe('Check project Endpoint', () => {
//   it('should return status code of 200', () => {
//     request(app).get('/project/1').expect(200);
//   });
// });
