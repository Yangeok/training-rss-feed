const Blog = require('../db/models/blog');
const BlogFeeds = require('../db/models/blogFeeds');
const Youtube = require('../db/models/youtube');
const YoutubeFeeds = require('../db/models/youtubeFeeds');

const { parseBlog, parseYoutube } = require('./parseRepo');
const parseBlogFeeds = require('../db/blog.feed.json');
const parseYoutubeFeeds = require('../db/youtube.feed.json');
const { write, feedFilename, platform } = require('./rss');

exports.addBlogAuthors = async () => {
  const data = Blog.insertMany(await parseBlog, { ordered: false });
  return data;
};

exports.addYoutubeAuthors = async () => {
  const data = Youtube.insertMany(await parseYoutube, { ordered: false });
  return data;
};

exports.modifyBlogAuthors = async () => {
  const data = parseBlog.forEach(async i => {
    await Blog.updateOne(
      { name: i.name },
      { $set: { url: i.url, desc: i.desc } }
    );
  });
  return data;
};

exports.modifyYoutubeAuthors = async () => {
  const data = parseYoutube.forEach(async i => {
    await Youtube.updateOne(
      { name: i.name },
      { $set: { url: i.url, desc: i.desc } }
    );
  });
  return data;
};

exports.addBlogFeedsSaveToFile = async () => {
  const blogs = await Blog.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  const extractedData = blogs.map(f => f.url);

  let urls = [];
  extractedData.forEach(i => {
    if (i.indexOf('naver') !== -1) {
      const naverRssAddress = i.replace('blog', 'rss.blog').concat('.xml');
      urls.push(naverRssAddress);
    }

    if (i.indexOf('tistory') !== -1) {
      const tistoryRssAddress = i.concat('/rss');
      urls.push(tistoryRssAddress);
    }
  });
  return write(urls, feedFilename(platform.blog));
};

exports.addBlogFeedsSaveToMongo = async () => {
  const data = [];
  for (let i = 0; i < parseBlogFeeds.data.length; i++) {
    data[i] = await BlogFeeds.insertMany(parseBlogFeeds.data[i], {
      ordered: false
    });
  }

  return data;
};

exports.addYoutubeFeedsSaveToFile = async () => {
  const youtubes = await Youtube.find()
    .select('-_id name url desc')
    .sort({ name: 'asc' });
  const extractedData = youtubes.map(f => f.url);

  let urls = [];
  extractedData.forEach(i => {
    if (i.indexOf('com/channel') !== -1) {
      const channelRssAddress = i
        .replace('com/', 'com/feeds/videos.xml?')
        .replace('channel/', 'channel_id=');
      urls.push(channelRssAddress);
    }

    if (i.indexOf('com/user') !== -1) {
      const userRssAddress = i
        .replace('com/', 'com/feeds/videos.xml?')
        .replace('user/', 'user=');
      urls.push(userRssAddress);
    }
  });

  return write(urls, feedFilename(platform.youtube));
};

exports.addYoutubeFeedsSaveToMongo = async () => {
  const data = [];
  for (let i = 0; i < parseYoutubeFeeds.data.length; i++) {
    data[i] = await YoutubeFeeds.insertMany(parseYoutubeFeeds.data[i], {
      ordered: false
    });
  }

  return data;
};
