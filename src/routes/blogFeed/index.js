const Router = require('koa-router');
const blogFeed = new Router();
const blogFeedCtrl = require('./blogFeed.controller');

blogFeed.post('/save/to/file', blogFeedCtrl.saveToFile);
blogFeed.post('/save/to/mongo', blogFeedCtrl.saveToMongo);

module.exports = blogFeed;
