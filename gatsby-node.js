const axios = require('axios');
const crypto = require('crypto');
const marked = require('marked');
const jsEmoji = require('emoji-js');

const Emoji = new jsEmoji.EmojiConvertor();
Emoji.replace_mode = 'unified';
const labels = ['Feature', 'Bugfix', 'Improvement', 'Meta'];

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const md = await axios.get('https://raw.githubusercontent.com/eramdam/BetterTweetDeck/master/CHANGELOG.md')
    .then(response => response.data);

  createNode({
    // Required fields.
    id: 'BTDChangelog',
    parent: null, // or null if it's a source node without a parent
    children: [],
    markdown: md,
    html: Emoji.replace_colons(marked(md).replace(new RegExp(`(\\[(${labels.join('|')})\\])`, 'gi'), (match, p1, p2) => `
        <span class="token -${p2.toLowerCase()}">${p2}</span>
      `)),
    internal: {
      type: 'GithubChangelog',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(md))
        .digest('hex'),
      mediaType: 'text/markdown',
    },
  });
};
