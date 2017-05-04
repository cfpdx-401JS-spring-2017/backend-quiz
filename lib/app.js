const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); //QUESTION: I may not need this?
//OPTION: add separate error handler file and require here.

app.use(morgan('dev'));
app.use(bodyParser.json()); //may not need body parser and morgan.

app.get('status', (req, res) => {
    res.send('ok');
});




module.exports = app;