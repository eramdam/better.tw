import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { btdGradient, gridWidth, smallerThanGridQuery } from '../styles/styleVariables';
import { Icon } from './icon';

const StyledHeader = styled.header`
  color: rgb(255, 255, 255);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.28);
  padding: 0 20px 80px 20px;
  position: relative;
  z-index: 0;

  &,
  &::after {
    background-image: ${btdGradient};
  }

  &::after {
    content: '';
    top: 0;
    width: 100%;
    left: 0;
    height: 100%;
    display: block;
    position: absolute;
    filter: blur(20px) saturate(100%);
    z-index: 0;
  }

  & .menu,
  .content {
    max-width: 100%;
    width: ${gridWidth};
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }

  .menu {
    text-align: right;
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .menuItem {
    text-decoration: none;
    color: currentColor;
    margin-left: 20px;
    display: inline-block;
    color: white;
  }

  .menuItem:hover .menuItemIcon {
    transform: translateY(-10%);
  }

  .menuItemIcon {
    vertical-align: bottom;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.28));
    margin-right: 5px;
    transition: transform 300ms ease;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content > .img {
    margin-right: 20px;
    flex-shrink: 0;
  }

  .content > .img > svg {
    width: 96px;
    fill: currentColor;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.28));
  }

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
  }

  .copy > h1 {
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
  }

  .copy > p {
    font-size: 1.2rem;
  }

  @media ${smallerThanGridQuery} {
    .copy {
      max-width: 450px;
      width: 100%;
      flex: 1;
    }
    .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export const Header = () => (
  <StyledHeader>
    <nav className="menu">
      <a className="menuItem" href="https://github.com/eramdam/BetterTweetDeck">
        <Icon name="github" className="menuItemIcon" size={20} />
        GitHub
      </a>
      <a className="menuItem" href="https://twitter.com/BetterTDeck">
        <Icon name="twitter" className="menuItemIcon" size={20} />
        Follow Us
      </a>
    </nav>
    <Link
      to="/"
      style={{
        textDecoration: 'none',
      }}
      className="content"
    >
      <span className="img">
        <svg viewBox="0 0 256 256" width={96}>
          <path
            id="a"
            d="M167.436757,215.316757 L128.275433,254.478081 L89.1141091,215.316757 L27.6778,215.316757 C12.3917732,215.316757 0,202.927798 0,187.642977 L0,27.6737801 C0,12.3899734 12.3906357,-5.68434189e-14 27.6778,-5.68434189e-14 L228.3222,-5.68434189e-14 C243.608227,-5.68434189e-14 256,12.3889588 256,27.6737801 L256,187.642977 C256,202.926783 243.609364,215.316757 228.3222,215.316757 L167.436757,215.316757 L167.436757,215.316757 Z M142.625275,124.070836 L180.116989,124.070836 L180.116989,95.9286773 L142.625275,95.9286773 L142.625275,58.8109463 L113.548161,58.8109463 L113.548161,95.9286773 L76.0564481,95.9286773 L76.0564481,124.070836 L113.548161,124.070836 L113.548161,161.469054 L142.625275,161.469054 L142.625275,124.070836 Z"
          />
        </svg>
      </span>
      <span className="copy">
        <h1>Better TweetDeck</h1>
        <p>Push TweetDeck beyond its limits.</p>
      </span>
    </Link>
  </StyledHeader>
);
