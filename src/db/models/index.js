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
          `> DB connected on uri ${env.MONGO_URI}${env.MONGO_DATABASE} ${
            env.NODE_ENV
          } environment`
        );
      }
    );
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};
