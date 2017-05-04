const Router = require('express').Router;
const router = Router();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    Image.find()
      .then(images => res.send(images))
      .catch(next);
  });

module.exports = router;