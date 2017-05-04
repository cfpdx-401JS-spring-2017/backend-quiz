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
  
  let secondImage = {
    title: 'dinner',
    description: 'a delicious dinner',
    category: 'food',
    url: 'www.someassets.com/food' 
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

  it('add another image for GET all test', () => {
    return request.post('/images')
      .send(secondImage)
      .then(res => res.body)
      .then(image => {
        assert.ok(image._id);

        testImage = image;
      }); 
  });

  it('GET all returns both documents', () => {
    return request.get('/images')
      .then(res => res.body)
      .then(images => assert.equal(images.length, 2));
  });

});