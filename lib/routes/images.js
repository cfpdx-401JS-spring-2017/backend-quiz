const Router = require('express').Router;
const router = Router();
const Studio = require('../models/image');

router
  .post('/', (res, req, next) => {
    new Image(req.body).save()
      .then(image => res.send(image))
      .catch(next);
  });

