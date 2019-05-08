exports.errorMessage = message => {
  return {
    success: false,
    message
  };
};

exports.successMessage = (key, params) => {
  return {
    success: true,
    [key]: params
  };
};
