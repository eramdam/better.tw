import { Link } from 'gatsby';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import BTDLogo from '../img/BTD.svg';
import meshGradient from '../img/mesh-gradient-1.png';
import { Icon } from './icon';

const animatedBackground = keyframes`
  0% {
    background-position-y: top;
  }

  100% {
    background-position-y: bottom;
  }
`;

const StyledHeader = styled.header`
  min-height: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    filter: blur(20px) saturate(100%);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;

    /* @media (prefers-color-scheme: dark) {
      display: none;
    } */
  }

  .bg,
  .bg::after,
  &::after {
    background-image: url(${meshGradient});
    background-size: cover;
    animation-direction: alternate;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-name: ${animatedBackground};
    animation-timing-function: linear;
  }

  .bg,
  .bg::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .bg {
    overflow: hidden;
  }

  &::after,
  .bg::after {
  }

  .bg::after {
    content: '';
    z-index: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  display: grid;
  grid-template-areas: 'logo . copy';
  grid-template-columns: auto 20px 1fr;
  justify-content: center;
  align-items: flex-start;
  color: white;
  z-index: 1;
`;

const StyledLogoText = styled.div`
  grid-area: copy;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 6px;
  grid-auto-rows: auto;

  @media (min-width: 400px) {
    margin-top: 10px;
  }
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const StyledSubtitle = styled.div`
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  font-size: 1rem;
`;

const StyledLogoWrapper = styled.div`
  grid-area: logo;
  width: 96px;

  @media (max-width: 400px) {
    width: 64px;
  }

  > img {
    max-width: 100%;
    filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.2)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.4));
  }
`;

const StyledMenu = styled.nav`
  z-index: 2;
  width: 100%;
  top: 0;
  max-width: 960px;
  margin: 0 auto;
  position: absolute;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-column-gap: 14px;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

const menuItemStyles = css`
  text-decoration: none;
  color: currentColor;
  display: inline-block;
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.28);
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-column-gap: 5px;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 100ms linear;
  padding: 5px 8px;
  border-radius: 6px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const StyledMenuItem = styled(Link)`
  ${menuItemStyles}
`;
const StyledMenuItemAnchor = styled.a`
  ${menuItemStyles}
`;
const StyledMenuItemIcon = styled(Icon)`
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.28));
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledMenu>
        <StyledMenuItem to="/donate">
          <StyledMenuItemIcon name="heart" size={16} />
          Donate
        </StyledMenuItem>
        <StyledMenuItemAnchor href="https://github.com/eramdam/BetterTweetDeck">
          <StyledMenuItemIcon name="github" size={16} />
          GitHub
        </StyledMenuItemAnchor>
        <StyledMenuItemAnchor href="https://twitter.com/BetterTDeck">
          <StyledMenuItemIcon name="twitter" size={16} />
          Follow
        </StyledMenuItemAnchor>
      </StyledMenu>
      <div className="bg"></div>
      <StyledLink to="/">
        <StyledLogoWrapper>
          <img src={BTDLogo} alt="" />
        </StyledLogoWrapper>
        <StyledLogoText>
          <StyledTitle>Better TweetDeck</StyledTitle>
          <StyledSubtitle>Take TweetDeck to the next level</StyledSubtitle>
        </StyledLogoText>
      </StyledLink>
    </StyledHeader>
  );
};
