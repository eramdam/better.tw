import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadButton from '../components/DownloadButton';
import homeStyles from '../pages/home.module.css';
// import 'normalize.css';
import '../css/global.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Better TweetDeck, supercharge your TweetDeck experience"
      meta={[
        { name: 'description', content: 'Emojis, thumbnails and advanced features for https://tweetdeck.twitter.com' },
        { name: 'keywords', content: 'tweetdeck, better, chrome, opera, firefox, extension, browser, plugin, emoji' },
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
    <Header />
    <nav className={homeStyles.downloadBtns}>
      <DownloadButton className={homeStyles.downloadButton} browser="chrome" />
      <DownloadButton className={homeStyles.downloadButton} browser="firefox" />
      <DownloadButton className={homeStyles.downloadButton} browser="opera" />
      <DownloadButton className={`${homeStyles.downloadButton} ${homeStyles.showMobile}`} browser="btd" text="Download now" />
    </nav>
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: () => null,
};

export default TemplateWrapper;
