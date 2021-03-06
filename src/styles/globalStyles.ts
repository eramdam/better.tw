import '@fontsource/lato';
import '@fontsource/pt-sans';

import { normalize } from 'polished';
import styled, { createGlobalStyle, css } from 'styled-components';

import { fontBody, fontTitle } from './styleVariables';

export const GlobalStyles = createGlobalStyle`
  /* Dumb hack so Prettier can touch the css here... */
  ${css`
    ${normalize()};

    * {
      box-sizing: border-box;
    }

    html,
    body {
      background: #f8f8f8;
      color: #4a4a4a;
      font-size: 18px;
      font-family: ${fontBody};
      -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fontTitle};
      margin-top: 1em;
      margin-bottom: 0.4em;
      line-height: 1.8;
    }

    p,
    ul {
      line-height: 1.6;
      font-size: 18px;
    }

    p,
    li {
      a {
        color: #00cbfc;
        color: #00a0fb;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    ol,
    ul {
      margin: 1em;
      margin-bottom: 0;
    }

    .content {
      font-size: 18px;
    }

    .content,
    .content p {
      line-height: 1.8;
    }

    .footnotes {
      margin-top: 4em;
      hr {
        border: 0;
        outline: none;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 2em;
      }
    }

    /* @media (prefers-color-scheme: dark) {
      html,
      body {
        background: #2b2b2b;
        color: white;
      }
    } */

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
  `}
`;

export const GridBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1540px) {
    max-width: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;
