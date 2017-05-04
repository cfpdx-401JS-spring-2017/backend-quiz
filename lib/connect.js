/*eslint-disable*/
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/images-api';
mongoose.connect(dbUri);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open on' + dbUri);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error' + err);
});