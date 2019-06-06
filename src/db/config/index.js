require('dotenv').config();
const env = process.env;
const isProd =
  env.NODE_ENV === 'production' ? env.MONGO_URI_PROD : env.MONGO_URI_DEV;

module.exports = {
  uri: `${isProd}${env.MONGO_DATABASE}`,
  opts: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  },
  msg: `> Connected on
 - URI: ${isProd.toUpperCase()}
 - Database: ${env.MONGO_DATABASE.toUpperCase()} 
 - Environment: ${env.NODE_ENV.toUpperCase()}`
};
