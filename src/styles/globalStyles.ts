import { normalize } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

import { gridWidth, smallerThanGridQuery, textColor } from './styleVariables';

export const GlobalStyles = createGlobalStyle`
  ${normalize()};
  
  * {
    box-sizing: border-box;
  }

  html,body {
    background: white;
    color: ${textColor};
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
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
