import { Link } from 'gatsby';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import BTDLogo from '../img/BTD.svg';
import meshGradient2 from '../img/mesh-gradient-2.png';

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
  }

  .bg,
  .bg::after,
  &::after {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${meshGradient2});
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
  align-items: center;
  color: white;
  z-index: 1;
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.6);
`;

const StyledSubtitle = styled.div`
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
`;

const StyledLogoWrapper = styled.div`
  grid-area: logo;
  width: 96px;

  > img {
    max-width: 100%;
    filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.2)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.4));
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="bg"></div>
      <StyledLink to="/">
        <StyledLogoWrapper>
          <img src={BTDLogo} alt="" />
        </StyledLogoWrapper>
        <div
          style={{
            gridArea: 'copy',
          }}>
          <StyledTitle>Better TweetDeck</StyledTitle>
          <StyledSubtitle>Push TweetDeck beyond its limits.</StyledSubtitle>
        </div>
      </StyledLink>
    </StyledHeader>
  );
};