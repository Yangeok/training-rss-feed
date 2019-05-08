const Koa = require('koa');
const Router = require('koa-router');
const json = require('koa-json');
const cors = require('koa2-cors');
const logger = require('koa-logger');
const bodyParser = require('koa-body');

const app = new Koa();
const router = new Router();

// Routers
const api = require('./routes/index');
router.use(api.routes());

// Middleware
app
  .use(json())
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

// Connection
const { PORT } = require('./utils/env');
const db = require('./db/models');
app.listen(PORT, () => {
  console.log(`> Koa server is running on port ${PORT}`);
  db();
});
