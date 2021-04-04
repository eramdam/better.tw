import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { customGridWidth, mobileQuery } from '../styles/styleVariables';

const StyledFooter = styled.div`
  ${customGridWidth(1000)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;

  .menu {
    text-align: right;
    text-transform: uppercase;
    font-size: 14px;
  }

  .menu a:any-link {
    color: #4a4a4a;
    text-decoration: none;
    margin-left: 20px;
  }

  .menu a:hover {
    color: black;
    text-decoration: underline;
  }

  @media ${mobileQuery} {
    small {
      text-align: left;
    }
    .menu {
      text-align: left;
      margin: 20px 0;
    }

    .menu a {
      margin-left: 0;
      margin-right: 20px;
    }
  }
`;

const StyledFooterWrapper = styled.div`
  background: #f8f8f8;
  width: 100%;
`;

export const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooter>
      <small className="copy">Better TweetDeck is not affiliated with Twitter or TweetDeck.</small>
      <nav className="menu">
        <Link to="/faq">FAQ</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/releases">Release notes</Link>
        <a href="https://github.com/eramdam/BetterTweetDeck">GitHub</a>
        <a href="https://twitter.com/BetterTDeck">Follow Us</a>
      </nav>
    </StyledFooter>
  </StyledFooterWrapper>
);
