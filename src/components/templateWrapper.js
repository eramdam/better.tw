import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { GlobalStyles } from '../styles/globalStyles';
import { mobileQuery } from '../styles/styleVariables';
import { DownloadButton } from './downloadButton';
import { Footer } from './footer';
import { Header } from './header';

const downloadBg = require('../img/download-bg.png');

const StyledTemplateWrapperDiv = styled.div`
  .downloadBtns {
    position: relative;
    z-index: 9;
    text-align: center;
    transform: translateY(-50%);

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
  }

  .downloadButton,
  .downloadZoneButton {
    margin: 0 12px;
  }

  .downloadZone {
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${downloadBg});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .downloadZoneWrapper {
    justify-content: center;
    padding: 40px 0 !important;
  }

  .downloadZoneWrapper h2,
  .downloadZoneWrapper p {
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.28);
    color: white;
  }

  .downloadZoneWrapper h2 {
    margin-bottom: 10px;
  }

  .downloadZoneWrapper p {
    margin: 1em;
    margin-bottom: 2em;
  }

  .beforeAfter {
    text-align: center;
  }

  .bigImage {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.52), 0 5px 15px 0 rgba(0, 0, 0, 0.27);
    border-radius: 4px;
    max-height: 500px;
  }

  .showMobile {
    display: none;
  }

  @media ${mobileQuery} {
    .downloadButton:not(.showMobile) {
      display: none;
    }

    .showMobile {
      display: inline-block;
    }

    .downloadZoneBtns {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .downloadZoneButton {
      width: 200px;
      margin: 12px 0;
    }
  }
`;

export const TemplateWrapper = ({ children, showDownloads, title }) => (
  <StyledTemplateWrapperDiv>
    <GlobalStyles />
    <Helmet
      title={title || 'Better TweetDeck, supercharge your TweetDeck experience'}
      meta={[
        {
          name: 'description',
          content: 'Emojis, thumbnails and advanced features for https://tweetdeck.twitter.com'
        },
        {
          name: 'keywords',
          content: 'tweetdeck, better, chrome, opera, firefox, extension, browser, plugin, emoji'
        }
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i'
        },
        { rel: 'shortcut icon', href: `${__PATH_PREFIX__}/img/favicon.ico` },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: `${__PATH_PREFIX__}/img/favicon-32x32.png`
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: `${__PATH_PREFIX__}/img/favicon-16x16.png`
        }
      ]}
    />
    <Header />
    <nav className={classnames('downloadBtns', { hidden: !showDownloads })}>
      <DownloadButton className="downloadButton" browser="chrome" />
      <DownloadButton className="downloadButton" browser="firefox" />
      <DownloadButton className="downloadButton" browser="edge" />
      <DownloadButton className="downloadButton" browser="opera" />
      <DownloadButton className="downloadButton showMobile" browser="btd" text="Download now" />
    </nav>
    {children}
    <Footer />
  </StyledTemplateWrapperDiv>
);

TemplateWrapper.propTypes = {
  showDownloads: PropTypes.bool,
  title: PropTypes.string
};

TemplateWrapper.defaultProps = {
  showDownloads: true,
  title: ''
};
