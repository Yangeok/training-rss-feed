const {
  addBlogFeedsSaveToFile,
  addBlogFeedsSaveToMongo
} = require('../../utils/query');
const { successMessage, errorMessage } = require('../../utils/response');

exports.saveToFile = async ctx => {
  try {
    ctx.body = successMessage('data', await addBlogFeedsSaveToFile());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};

exports.saveToMongo = async ctx => {
  try {
    ctx.body = successMessage('data', await addBlogFeedsSaveToMongo());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};
