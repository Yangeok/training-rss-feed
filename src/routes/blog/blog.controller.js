const { addBlogAuthors, modifyBlogAuthors } = require('../../utils/query');
const { successMessage, errorMessage } = require('../../utils/response');

exports.list = async ctx => {
  try {
    ctx.body = successMessage('data', await addBlogAuthors());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};

exports.modify = async ctx => {
  try {
    ctx.body = successMessage('data', await modifyBlogAuthors());
  } catch (e) {
    ctx.status = 400;
    ctx.body = errorMessage(e.message);
  }
};
