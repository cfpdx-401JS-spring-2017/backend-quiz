const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// const image = require('./routes/images');

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use('/images', image);


module.exports = app;

