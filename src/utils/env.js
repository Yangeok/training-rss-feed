require('dotenv').config();

let PORT;
const env = process.env;

switch (env.NODE_ENV) {
  case 'development':
    PORT = env.DEV_PORT || 3002;
    break;

  case 'production':
    PORT = env.PORT || 3002;
    break;

  case 'test':
    PORT = env.TEST_PORT || 8080;
    break;
}

module.exports = { PORT };
