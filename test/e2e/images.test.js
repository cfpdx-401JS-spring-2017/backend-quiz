const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('images api', () => {

    before(db.drop);
});

let image1 = {
    title: 'fake title 1',
    description: 'whatever',
    category: 'food',
    url: 'fake url 1',
};
// let image2 = {
//     title: 'fake title 2',
//     description: 'whatever',
//     category: 'animals',
//     url: 'fake url 2',
// };
// let image3 = {
//     title: 'fake title 3',
//     description: 'whatever',
//     category: 'places',
//     url: 'fake url 3',
// };

function saveImage(image) {
    return request
        .post('/api/images')
        .send(image)
        .then(res => res.body);
}

it('roundtrips a new image', () => {
    return saveImage(image1)
        .then(savedImage => {
            assert.ok(savedImage._id, 'saved image has an id');
            image1 = savedImage;
        })

        .then(() => {
            return request.get(`/api/images/${image1._id}`);
        })
        .then(res => res.body)
        .then(gotImage => {
            assert.deepEqual(gotImage, image1);
        });
});

it('GET returns 404 for non-existent id', () => {
    const fakeId = '5201103b8896909da4402997';
    return request.get(`/api/images/${fakeId}`)
        .then(
        () => { throw new Error('expected 404'); },
        res => {
            assert.equal(res.status, 404);
        }
        );

});