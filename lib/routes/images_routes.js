const Router = require('express').Router;
const router = Router();
const Images = require('.//models/images');

router
.get('/', (req, res, next) => {
  Images.find()
  then(images => res.send(images))
  .catch(next);
});
