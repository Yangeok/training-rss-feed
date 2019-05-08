const Router = require('koa-router');
const router = new Router();

const blogFeed = require('./blogFeed');
const youtubeFeed = require('./youtubeFeed');
const blog = require('./blog');
const youtube = require('./youtube');

router
  .use('/blog', blog.routes())
  .use('/blog/feed', blogFeed.routes())
  .use('/youtube', youtube.routes())
  .use('/youtube/feed', youtubeFeed.routes());

module.exports = router;
