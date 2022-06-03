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
          assert.deepEqual(res.body, { message: 'OK' });
        });
    });
  });
});
