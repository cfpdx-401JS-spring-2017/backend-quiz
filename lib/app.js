const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const images = require('./routes/images');
app.use('api/images', images);

module.exports = app;