// const request = require('supertest');
const model = require('../index.js');

describe('Fill Creator Get Request', () => {
  it('should return creator count', () => {
    model.fillCreators.get((err, data) => {
      expect(data[0].creatorCount).toBe(100);
    });
  });
});

describe('Fill Project Get Request', () => {
  it('should return project count', () => {
    model.fillProjects.get((err, data) => {
      expect(data[0].projectCount).toBe(100);
    });
  });
});
