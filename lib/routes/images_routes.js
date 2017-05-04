const Router = require('express').Router;
const router = Router();
const Image = require('.//models/image.model');

router
.get('/images', (req, res, next) => {
  Image.find()
  .then(images => res.send(images))
  .catch(next);
})

.get('/images/:id', (req, res, next) => {
  const id = req.params.id;
  Image.findById(id)
    .then(image => {
      if(!image) {
        return res.status.status(404).statusMessage(`${id} NOT FOUND!`);
      } else res.send(image);
    }).catch(next);
})


