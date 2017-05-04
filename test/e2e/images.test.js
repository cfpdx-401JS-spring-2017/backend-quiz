const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('images api', () => {

    before(db.drop);

    it('GET returns empty array', () => {
        return request.get('/images')
            .then(res => res.body)
            .then(images => {
                assert.deepEqual(images, []);
            });
    });

    let testImage = {
        title: 'juggling monkey',
        description: 'such talent',
        category: 'animals',
        url: 'jugglingmonkey.com/image'
    };

    function saveImage(image) {
        return request
            .post('/images')
            .send(image)
            .then(res => res.body);
    }

    it('roundtrips an image', () => {
        return saveImage(testImage)
            .then(saved => {
                assert.ok(saved._id);
                testImage = saved;
            })
            .then(() => {
                return request.get(`/images/${testImage._id}`);
            })
            .then(res => res.body)
            .then(got => {
                assert.deepEqual(got, {
                    _id: got._id,
                    title: got.title,
                    description: got.description,
                    category: got.category,
                    url: got.url
                });
            });
    });

    describe('failures', () => {

        it('returns 404 if for nonexistent image with get/id', () => {
            const badId = '589d04a8b6695bbdfd361241';
            return request.get(`/images/${badId}`)
                .then(
                () => { throw new Error('expected 404'); },
                res => {
                    assert.equal(res.status, 404);
                });
        });

    });

    // it('')
});