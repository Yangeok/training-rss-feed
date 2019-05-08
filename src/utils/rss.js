const Parser = require('rss-parser');
const parser = new Parser();
const writeJsonFile = require('write-json-file');
const platform = require('./platform');

const eachFeed = async url => {
  const feed = await parser.parseURL(url);
  let arr = [];
  feed.items.forEach(e => {
    if (e.contentSnippet) {
      return arr.push({
        creator: e.creator,
        title: e.title,
        link: e.link,
        pubDate: e.pubDate,
        contentSnippet: `${e.contentSnippet.substring(0, 128)}...`
      });
    } else {
      return arr.push({
        creator: e.author,
        title: e.title,
        link: e.link,
        pubDate: e.pubDate
      });
    }
  });
  return arr;
};

const combineFeeds = async urls => {
  let a = [];
  for (let i = 0; i < urls.length; i++) {
    a[i] = await eachFeed(urls[i]);
  }
  return a;
};

const write = async (urls, filename) => {
  writeJsonFile(filename, {
    data: await combineFeeds(urls)
  });
};

const feedFilename = filename => `src/db/${filename}.feed.json`;

module.exports = { eachFeed, write, combineFeeds, feedFilename, platform };
