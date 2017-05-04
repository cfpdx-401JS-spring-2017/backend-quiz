const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('images API', () => {
  before(() => {
    return db.drop();
  });
  it('GETs all images', () => {
    return request.get('/api/images').then(res => {
      const images = res.body;
      assert.deepEqual(images, []); 
    });
  });

});