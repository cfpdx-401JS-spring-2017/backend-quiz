const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('image api', () => {
    before(db.drop);

    it('initial /GET returns no image', () => {
        return request.get('/api/images')
            .then(image => {
                assert.deepEqual(image.body.length, 0);
            });
    });

    let image = null;
    it('posts a image to the db', () => {
        image = {
            title: 'Bannana Bears', 
            description: 'these bears are killing it',
            category: 'animals',
            url: 'www.bears.com'
        };

        return request.post('/api/images')
            .send(image)
            .then(bear => {
                let {body} = bear;
                image.__v = 0;
                image._id = body._id;
                assert.deepEqual(body, image);
            });
    });

    it('checks to see if you can get image by ID', () => {

        return request.get(`/api/images/${image._id}`)
            .then(bear => {
                let {body} = bear;
                assert.deepEqual(body, image);
            });

    });
});