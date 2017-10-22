import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import 'normalize.css';
import '../css/index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Better TweetDeck, supercharge your TweetDeck experience"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|PT+Sans:400,400i,700,700i' },
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
