const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const youtubeFeedsSchema = new mongoose.Schema({
  creator: String,
  title: { type: String, unique: true },
  link: String,
  pubDate: Date
});

youtubeFeedsSchema.plugin(uniqueValidator);
module.exports = mongoose.model('YoutubeFeed', youtubeFeedsSchema);
