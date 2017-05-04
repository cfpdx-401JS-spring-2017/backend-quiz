const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('images route', () => {

  before(db.drop);

  let fakeImage = {
    title: 'pizza',
    category: 'pizza',
    url: 'images/pizza'
},


function savedImage(image) {
    return request.post('/images')
      .send(image)
      .then(res => res.body);
  }

  it('roundtrips an image', () => {
    return savedImage(fakeImage)
      .then(saved => {
        assert.ok(saved._id, 'saved has id');
        fakeImage = saved;
      })
      .then(() => {
        return request.get(`/images/${fakeImage._id}`);
      })
      .then(res => {
        const studio = res.body;
        assert.deepEqual(studio, fakeImage);
      });
  });


