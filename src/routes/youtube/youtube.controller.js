const {
  addYoutubeAuthors,
  modifyYoutubeAuthors
} = require('../../utils/query');
const { successMessage, errorMessage } = require('../../utils/response');

exports.list = async ctx => {
  try {
    ctx.body = successMessage('data', await addYoutubeAuthors());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};

exports.modify = async ctx => {
  try {
    ctx.body = successMessage('data', await modifyYoutubeAuthors());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};
