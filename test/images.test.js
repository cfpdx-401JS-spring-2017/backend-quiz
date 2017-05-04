const assert = require('chai').assert;
const request = require('./util/_request');
const db = require('./util/_db');

describe('Images API', () => {

  before(db.drop);

  it('testing connection', () => {
    return request.get('/api/studios')
      .then(res => {
        const images = res.body;
        assert.okay(images, []);
      });
  });
});