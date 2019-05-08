const axios = require('axios');
const platform = require('./platform');
const yaml = require('js-yaml');

const url = platform => {
  return `https://raw.githubusercontent.com/Yangeok/training-list/master/${platform}.yml`;
};
const parseBlog = () => {
  const yamlData = async () => {
    const data = await axios.get(url(platform.blog));
    return data.data;
  };

  const jsonData = async () => {
    const data = yaml.safeLoad(await yamlData(), 'utf8');
    return data;
  };

  return jsonData();
};

const parseYoutube = async () => {
  const yamlData = async () => {
    const data = await axios.get(url(platform.youtube));
    return data.data;
  };

  const data = await yaml.safeLoad(await yamlData(), 'utf8');
  return data;
};

module.exports = {
  parseBlog: parseBlog(),
  parseYoutube: parseYoutube()
};
