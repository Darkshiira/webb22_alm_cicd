const request = require('supertest');
const app = require('../../app');

describe('/calc/', function () {
  it('should return 200 OK', function (done) {
    request(app)
      .get('/calc/')
      .expect(200, done);
  });
});
