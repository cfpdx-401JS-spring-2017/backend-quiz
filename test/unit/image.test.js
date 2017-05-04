const assert = require('chai').assert;
const Image = require('../../lib/models/image');

describe('image validation', () => {

    it('checks for required title', () => {
        const testImage = new Image({});
        testImage.validate()
            .then(
            () => { throw new Error('expected validation error'); },
            err => {
                const errors = err.errors;
                assert.ok(errors.title && errors.title.kind === 'required');
                assert.ok(errors.category && errors.category.kind === 'required');
                assert.ok(errors.url && errors.url.kind === 'required');
            });
    });

});