const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  nomArt: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'gym-power'
});

module.exports = mongoose.model('Article', articleSchema, 'gym-power');
