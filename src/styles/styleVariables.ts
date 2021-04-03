import { css } from 'styled-components';

export const gridWidth = '960px';
export const smallerThanGridQuery = '(max-width: 960px)';
export const mobileQuery = '(max-width: 660px)';
export const fontTitle = `"PT Sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`;
export const fontBody = `'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`;

export function customGridWidth(width: number, margin = 0) {
  return css`
    width: 100%;
    max-width: ${width}px;

    @media (max-width: ${width - margin * 2}px) {
      max-width: calc(100% - ${margin}px * 2);
    }
  `;
}
