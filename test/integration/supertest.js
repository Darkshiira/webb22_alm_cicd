const request = require('supertest');
const app = require('../../app');

describe('/calc/', function () {
  it('should return 200 OK', function (done) {
    request(app)
      .get('/calc/')
      .expect(200, done);
  });
  it('should return 2 if adding 1 and 1', function (done) {
    request(app)
      .get('/calc/add?val=1&val=1')
      .expect(200, 'Result: 2', done);
  });
  it('should return 0 if subtracting 1 from 1', function (done) {
    request(app)
      .get('/calc/subtract?val=1&val=1')
      .expect(200, 'Result: 0', done);
  });
  it('should return 1 if multiplying 1 and 1', function (done) {
    request(app)
      .get('/calc/multiply?val=1&val=1')
      .expect(200, 'Result: 1', done);
  });
  it('should return 1 if dividing 1 by 1', function (done) {
    request(app)
      .get('/calc/divide?val=1&val=1')
      .expect(200, 'Result: 1', done);
  });
});
