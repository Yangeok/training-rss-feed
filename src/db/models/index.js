const mongoose = require('mongoose');
const { uri, opts, msg } = require('../config');

module.exports = () => {
  connect = () => {
    mongoose.connect(uri, opts, err => {
      err ? console.error(`connection error:`, err) : console.log(msg);
    });
  };
  connect();
  mongoose.connection.on('disconnected', connect);
};
