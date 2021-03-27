import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { GlobalStyles } from '../styles/globalStyles';
import { DownloadButton } from './downloadButton';
import { Header } from './header';

const StyledTemplateWrapperDiv = styled.div``;

const StyledNav = styled.nav`
  z-index: 9;
  position: relative;

  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-column-gap: 16px;
  transform: translateY(-60%);

  .showMobile {
    display: none;
  }

  @media (max-width: 660px) {
    > a:not(.showMobile) {
      display: none;
    }

    .showMobile {
      display: block;
    }
  }
`;

interface TemplateWrapperProps {
  showDownloads?: boolean;
  title?: string;
}
export const TemplateWrapper: FC<TemplateWrapperProps> = ({ children, showDownloads, title }) => (
  <StyledTemplateWrapperDiv>
    <GlobalStyles></GlobalStyles>
    <Helmet
      title={title || 'Better TweetDeck, supercharge your TweetDeck experience'}
      meta={[
        {
          name: 'description',
          content: 'Take TweetDeck to the next level',
        },
        {
          name: 'keywords',
          content:
            'tweetdeck, better, chrome, opera, firefox, extension, browser, plugin, emoji, safari, edge',
        },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i',
        },
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
    <StyledNav>
      <DownloadButton browser="chrome" />
      <DownloadButton browser="safari" />
      <DownloadButton browser="firefox" />
      <DownloadButton browser="edge" />
      <DownloadButton browser="opera" />
      <DownloadButton className="showMobile" browser="btd">
        Download now
      </DownloadButton>
    </StyledNav>
    {children}
  </StyledTemplateWrapperDiv>
);
