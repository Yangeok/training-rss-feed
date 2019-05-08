const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const youtubeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  desc: String,
  url: String
});

youtubeSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Youtube', youtubeSchema);
