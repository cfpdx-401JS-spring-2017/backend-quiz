const Router = require('express').Router;
const router = Router();
const Image = require('../model/image');

router 
    
    .get('/', (req, res, next) => {
        if(!req.query){
            Image.find()
                .then(images => {
                    res.send(images);
                })  
                .catch(next);
        } else {
            console.log(req.query.category);
            Image.find({category: req.query.category})
                .then(images => {
                    res.send(images);
                })  
                .catch(next);
        }
    })

    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .then(image => {
                if(!image) res.status(404).statusMessage('FOOLIO NO IMAGES HURR');
                else res.send(image);
            })
            .catch(next);
    })
    
    .post('/', (req, res, next) => {
        let {body} = req;
        console.log(body);
        new Image (body)
            .save()
            .then(image => {
                res.send(image);
            })
            .catch(err => {
                next(JSON.stringify(err.errors, true, 2));
            });
    });

module.exports = router;