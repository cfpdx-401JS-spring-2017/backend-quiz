const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const Image = require('./models/image');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/images', (req, res, next) => {
  Image.find()
    .lean()
    .select('title category')
    .then(images => res.send(images))
    .catch(next);
});

app.get('/images/:id', (req, res, next) => {
  Image.findById(req.params.id)
    .then(image => res.send(image))
    .catch(next);
});

app.post('/images', (req, res, next) => {

  if (req.body.category !== 'animals' && req.body.category !== 'food' && req.body.category !== 'places') {
    res.status(400).send();
  } else {
    new Image(req.body)
      .save()
      .then(saved => res.send(saved))
      .catch(next);
  }
});

module.exports = app;