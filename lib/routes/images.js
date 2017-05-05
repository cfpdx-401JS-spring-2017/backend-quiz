const Router = require('express').Router;
const router = Router();

const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
        Image.find()
            .lean()
            .select('title category')
            .then(images => res.send(images))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Image.findById(id)
            .lean()
            .select('title category description url')
            .then(image => {
                if(!image) return res.status(404).send('no image found');res.send(image); 
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Image(req.body)
            .save()
            .then(image => res.send(image))
            .catch(next);
    });

module.exports = router;