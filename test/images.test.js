const assert = require('chai').assert;
const request = require('./util/_request');
const db = require('./util/_db');

describe('Images API', () => {

  before(db.drop);

  it('testing connection', () => {
    return request.get('/api/images')
      .then(res => {
        console.log(res);
        const images = res.body;
        assert.deepEqual(images, []);
      });
  });

  it('roundtrips a new image', () => {
    let pomImage = {
      title: 'Bo the Best Pom',
      descripton: 'He looks like a teddy bear and is fluffy',
      category: 'animals',
      url: 'http://bestpomever.com'
    };

    return request.post('/api/images')
    .send(pomImage)
    .then(res => {
      pomImage = res.body;
      return request.get(`/api/images/${pomImage._id}`)

    });
  });

  // it('returns 400 if required field not included' () => {});
});