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

  let fooImageBar = {
    title: 'no',
    description: 'no',
    category: 'no',
    url: 'foobar.qux'
  };

  function savedImage(image) {
    return request 
      .post('api/image')
      .send(image)
      .then(res => res.body);
  }

  it('is a test for a post? ', (image) => {
    return savedImage(fooImageBar)
    .then(saved => {
      assert.ok(saved._id, 'whatever');
      fooImageBar = saved;
    })
    .then(() => {
      return request 
        .get(`/api/images/${fooImageBar._id}`);
    })
    .then(res => {
      const image = res.body;
      assert.deepEqual(image, fooImageBar);
  })
  



});