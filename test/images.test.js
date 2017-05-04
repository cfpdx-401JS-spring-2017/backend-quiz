const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('images API', () => {

  before(db.drop);

  let testImage = {
    title: 'sunset',
    description: 'a beautiful sunset',
    category: 'places',
    url: 'www.someassets.com/image' 
  };

  it('POST an image', () => {
    return request.post('/images')
      .send(testImage)
      .then(res => {
        assert.ok(res.statusCode === 200);

        return res.body;
      })
      .then(image => {
        assert.ok(image._id);

        testImage = image;
      });
  });

  it('GET by id returns same document', () => {
    return request.get(`/images/${testImage._id}`)
      .then(res => res.body)
      .then(got => {
        assert.equal(got.title, 'sunset');
        assert.equal(got.description, 'a beautiful sunset');
        assert.equal(got.category, 'places');
        assert.equal(got.url, 'www.someassets.com/image');
      });
  });

});