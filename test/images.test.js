const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('images API', () => {

  before(db.drop);

  let testImage = {
    title: 'sunset.jpg',
    description: 'a beautiful sunset',
    category: 'places',
    url: 'www.someassets.com/image' 
  };

  it('POST an image', () => {
    return request.post('/images')
      .send(testImage)
      .then(res => res.body)
      .then(image => {
        assert.ok(image._id);
        assert.equal(image.category, 'animals' || 'food' || 'places');
      });
  });

});