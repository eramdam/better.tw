import { css } from 'styled-components';

export const gridWidth = '960px';
export const smallerThanGridQuery = '(max-width: 960px)';
export const mobileQuery = '(max-width: 660px)';

export function customGridWidth(width: number, margin = 0) {
  return css`
    width: 100%;
    max-width: ${width}px;

    @media (max-width: ${width - margin * 2}px) {
      max-width: calc(100% - ${margin}px * 2);
    }
  `;
}
