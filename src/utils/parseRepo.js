require('dotenv').config();
const axios = require('axios');
const yaml = require('js-yaml');
const { blog, youtube } = require('./platform');
const env = process.env;

const url = platform => {
  return `${env.URL}${platform}.yml`;
};

const parseBlog = async () => {
  const toYamlData = async () => {
    const data = await axios.get(url(blog));
    return data.data;
  };

  const toJsonData = await yaml.safeLoad(await toYamlData(), 'utf8');
  return toJsonData;
};

const parseYoutube = async () => {
  const toYamlData = async () => {
    const data = await axios.get(url(youtube));
    return data.data;
  };

  const toJsonData = await yaml.safeLoad(await toYamlData(), 'utf8');
  return toJsonData;
  // const toJsonData = async () => {
  //   const data = yaml.safeLoad(await toYamlData(), 'utf8');
  //   return data;
  // };
  // return toJsonData();
};

module.exports = {
  parseBlog: parseBlog(),
  parseYoutube: parseYoutube()
};
