import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { GridBlock } from '../styles/globalStyles';
import { mobileQuery, textColor } from '../styles/styleVariables';

const StyledFooter = styled(GridBlock)`
  justify-content: space-between;
  background: white;
  color: ${textColor};
  padding: 20px;

  .menu {
    text-align: right;
    text-transform: uppercase;
    font-size: 14px;
  }

  .menu a {
    color: ${textColor};
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

export const Footer = () => (
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
);
