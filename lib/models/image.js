const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: { type: String },
  category: {
    type: String,
    enum: ['animals', 'food', 'places']
  },
  url: { type: String }
});

module.exports = mongoose.model('Image', schema);