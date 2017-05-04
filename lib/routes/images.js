const Router = require('express').Router;
const router = Router();
const Image = require('../models/image');

router

    .get('/', (req, res, next) => {
        Image.find()
            .lean()
            .select('title category url')
            .then(images => res.send(images))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Image(req.body)
            .save()
            .then(image => res.send(image))
            .catch(next);
    });

module.exports = router;