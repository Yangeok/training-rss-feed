require('dotenv').config({ path: __dirname });
const mongoose = require('mongoose');
const env = process.env;

module.exports = () => {
  function connect() {
    mongoose.connect(
      `${env.MONGO_URI}${env.MONGO_DATABASE}`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
      },
      err => {
        if (err) {
          console.error(`connection error:`, err);
        }
        console.log(
          `> Connected on
 - URI: ${env.MONGO_URI}
 - Database: ${env.MONGO_DATABASE.toUpperCase()} 
 - Environment: ${env.NODE_ENV.toUpperCase()}`
        );
      }
    );
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};
