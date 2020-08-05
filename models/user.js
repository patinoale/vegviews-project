const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('../models/review');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    reviews: {
    type: Schema.Types.ObjectId, ref: 'Review'
    },
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);