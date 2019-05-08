const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const blogFeedsSchema = new mongoose.Schema({
  creator: String,
  title: { type: String, unique: true },
  link: String,
  pubDate: Date,
  contentSnippet: String
});

blogFeedsSchema.plugin(uniqueValidator);
module.exports = mongoose.model('BlogFeed', blogFeedsSchema);
