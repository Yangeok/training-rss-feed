const Router = require('koa-router');
const blog = new Router();
const blogCtrl = require('./blog.controller');

blog.get('/', blogCtrl.list);
blog.put('/', blogCtrl.modify);

module.exports = blog;
