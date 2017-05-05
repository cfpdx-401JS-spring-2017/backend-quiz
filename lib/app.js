const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const images = require('./routes/images_routes');

app.use('/api/images', images);

module.exports = app;