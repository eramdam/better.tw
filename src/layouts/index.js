import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import 'normalize.css';
import '../css/global.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Better TweetDeck, supercharge your TweetDeck experience"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i' },
        { rel: 'shortcut icon', href: `${__PATH_PREFIX__}/img/favicon.ico` },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: `${__PATH_PREFIX__}/img/favicon-32x32.png`,
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: `${__PATH_PREFIX__}/img/favicon-16x16.png`,
        },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: () => null,
};

export default TemplateWrapper;
