// Import modules
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Define sauce template
const sauceInformations = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: [String], required: true },
  usersDisliked: { type: [String], required: true },
});

sauceInformations.plugin(uniqueValidator);

module.exports = mongoose.model('Sauce', sauceInformations);
