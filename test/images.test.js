const assert = require('chai').assert;
const request = require('./util/_request');
const db = require('./util/_db');

describe('Images API', () => {

  before(db.drop);

  it('testing connection', () => {
    return request.get('/api/images')
      .then(res => {
        const images = res.body;
        assert.deepEqual(images, []);
      });
  });

  let pomImage = {
    title: 'Bo the Best Pom',
    descripton: 'He looks like a teddy bear and is fluffy',
    category: 'animals',
    url: 'bestpomever'
  };

  it('roundtrips a new image', () => {
    return request.post('/api/images')
      .send(pomImage)
      .then(res => res.body)
      .then(saved => {
        pomImage = saved;
        console.log('PomImage: ', pomImage);
        return request.get(`/api/images/${pomImage._id}`)
          .then(res => res.body)
          .then(gotImage => {
            assert.equal(gotImage, pomImage);
          });
      });
  });

  // it('returns 400 if required field not included' () => {});
});