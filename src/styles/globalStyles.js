import styled, { createGlobalStyle } from 'styled-components';

import {
  fontBody,
  fontHeading,
  gridWidth,
  smallerThanGridQuery,
  textColor,
} from './styleVariables';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  *:not(ul, ol) {
    padding: 0;
  }

  body {
    background: white;
    color: ${textColor};
    font-size: 16px;
    font-family: ${fontBody};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontHeading};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    line-height: 1.6;
  }

  .font-body {
    font-family: ${fontBody};
  }

  .font-heading {
    font-family: ${fontHeading};
  }

  span.token {
    padding: 2px 6px 3px;
    border-radius: 4px;
    color: white;
    font-size: 90%;
    text-transform: uppercase;
    font-family: system-ui;
    font-weight: 500;
    text-shadow: 0 1px 1px color(black a(0.6));
    box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(transparent, color(black a(0.2)));
  }

  span.token.-meta {
    background-color: hsl(196, 99%, 60%);
  }

  span.token.-feature {
    background-color: hsl(108, 99%, 40%);
  }

  span.token.-bugfix {
    background-color: hsl(136, 0%, 50%);
  }

  span.token.-improvement {
    background-color: hsl(47, 99%, 60%);
  }
`;

export const GridBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${gridWidth};
  margin: 0 auto;

  @media ${smallerThanGridQuery} {
    max-width: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;
