const morgan = require('morgan');
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(morgan('dev'));

const images = require('./routes/images');
app.use('api/images', images);

module.exports = app;