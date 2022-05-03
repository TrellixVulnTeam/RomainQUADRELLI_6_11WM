// Import modules
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Define user template
const userInformations = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

uniqueValidator.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
