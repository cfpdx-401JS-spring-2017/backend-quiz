const assert = require('chai').assert;
const request = require('./util/_request');
const db = require('./util/_db');

describe('Images API', () => {

  before(db.drop);

  let pomImage = {
    title: 'Bo the Best Pom',
    descripton: 'He looks like a teddy bear and is fluffy',
    category: 'animals',
    url: 'http://bestpomever.png'
  };

  it('roundtrips a new image', () => {
    return request.post('/api/images')
      .send(pomImage)
      .then(res => res.body)
      .then(saved => {
        pomImage = saved;
        return request.get(`/api/images/${pomImage._id}`)
          .then(res => res.body)
          .then(gotImage => {
            assert.equal(gotImage.title, pomImage.title);
            assert.equal(gotImage.description, pomImage.description);
            assert.equal(gotImage.category, pomImage.category);
            assert.equal(gotImage.url, pomImage.url);
          });
      });
  });

  it('GET/ all images', () => {
    return request.get('/api/images')
      .then(res => {
        const images = res.body;
        const image = images[0];
        assert.deepEqual(images.length, 1);
        assert.deepEqual(image, {
          _id: image._id,
          title: image.title,
          category: image.category
        });
      });
  });

  it('GET/ all images by category', () => {
    return request.get(`/api/images?category=${pomImage.category}`)
      .then(res => {
        const images = res.body;
        const image = images[0];
        assert.deepEqual(image.category, 'animals');
      });
  });

});