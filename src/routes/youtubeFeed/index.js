const Router = require('koa-router');
const youtubeFeed = new Router();
const youtubeFeedCtrl = require('./youtubeFeed.controller');

youtubeFeed.post('/save/to/file', youtubeFeedCtrl.saveToFile);
youtubeFeed.post('/save/to/mongo', youtubeFeedCtrl.saveToMongo);

module.exports = youtubeFeed;
