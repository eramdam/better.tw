/* eslint no-param-reassign:0 */
const { createApolloFetch } = require('apollo-fetch');
const config = require('config');
const crypto = require('crypto');
const marked = require('marked');

const GITHUB_URI = 'https://api.github.com/graphql';
const GITHUB_RELEASES_QUERY = `
query BTDReleases {
  viewer {
    repository(name: "BetterTweetDeck") {
      id
      releases(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            id
            isDraft
            name
            createdAt
            description
            url
            tag {
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}`;
const githubApolloFetch = createApolloFetch({ uri: GITHUB_URI });
githubApolloFetch.use(({ options }, next) => {
  if (!options.headers) {
    options.headers = {}; // Create the headers object if needed.
  }
  options.headers.authorization = `bearer ${config.github_token}`;

  next();
});

const processRelease = release => ({
  id: release.id,
  parent: null,
  title: release.name,
  url: release.url,
  children: [],
  description: marked(release.description),
  date: release.createdAt,
  internal: {
    type: 'GithubRelease',
    contentDigest: crypto
      .createHash('md5')
      .update(release.description)
      .digest('hex'),
  },
});

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const releases = await githubApolloFetch({
    query: GITHUB_RELEASES_QUERY,
  }).then(({ data }) => data.viewer.repository.releases.edges
    .filter(r => !r.node.isDraft)
    .map(r => ({
      ...r.node,
      name: r.node.name || r.node.tag.name,
      tag: undefined,
    })));

  releases.forEach(release => createNode(processRelease(release)));
};
