const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const blogSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  desc: String,
  url: String
});

blogSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Blog', blogSchema);
