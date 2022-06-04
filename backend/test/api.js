const chai = require('chai');
chai.use(require('chai-http'));

const assert = chai.assert;

const server = require('../app.js');

describe('API', function () {
  describe('test', function () {
    it('should return the ok message', function () {
      return chai.request(server)
        .get('/api/test')
        .then((res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, { status: 'OK' });
        });
    });
  });

  describe('/nearby endpoint', function () {
    it('should reject missing lattitude', function () {
      return chai.request(server)
        .get('/api/nearby?lng=110&type=bar')
        .then((res) => {
          assert.equal(res.status, 400);
        });
    });
    it('should reject missing longitude', function () {
      return chai.request(server)
        .get('/api/nearby?lat=35&type=bar')
        .then((res) => {
          assert.equal(res.status, 400);
        });
    });
    it('should reject bad type', function () {
      return chai.request(server)
        .get('/api/nearby?lat=35&lon=110&type=ufo')
        .then((res) => {
          assert.equal(res.status, 400);
        });
    });
  });

  describe('/types endpoint', function () {
    it('should return a list of types', function () {
      return chai.request(server)
        .get('/api/types')
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.status, 'OK');
          assert.include(res.body.results, 'bar');
          assert.include(res.body.results, 'dentist');
          assert.include(res.body.results, 'restaurant');
        });
    });
  });
});
