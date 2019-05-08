const {
  addYoutubeFeedsSaveToFile,
  addYoutubeFeedsSaveToMongo
} = require('../../utils/query');
const { successMessage, errorMessage } = require('../../utils/response');

exports.saveToFile = async ctx => {
  try {
    ctx.body = successMessage('data', await addYoutubeFeedsSaveToFile());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};

exports.saveToMongo = async ctx => {
  try {
    ctx.body = successMessage('data', await addYoutubeFeedsSaveToMongo());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};
