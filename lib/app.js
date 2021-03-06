const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());

const images = require('./routes/images');
app.use('/api/images', images);

module.exports = app;