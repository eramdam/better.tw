import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import btdLogo from '../img/btd-icon.png';
import chromeLogo from '../img/chrome-icon.png';
import edgeLogo from '../img/edge-icon.png';
import firefoxLogo from '../img/firefox-icon.png';
import operaLogo from '../img/opera-icon.png';
import safariLogo from '../img/safari-icon.png';

function addBrowserStyles({ browser }: Partial<DownloadButtonProps>) {
  switch (browser) {
    case 'chrome':
      return css`
        background-image: url(${chromeLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #4285f4, #2962bd);
        }
      `;

    case 'edge':
      return css`
        background-image: url(${edgeLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #42c45f, #33c1ef);
        }
      `;

    case 'opera':
      return css`
        background-image: url(${operaLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #cc0f16, #980910);
        }
      `;

    case 'firefox':
      return css`
        background-image: url(${firefoxLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #ff9500, #e66000);
        }
      `;

    case 'safari':
      return css`
        background-image: url(${safariLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #1fa5f0, #1d77e6);
        }
      `;

    case 'btd':
      return css`
        background-image: url(${btdLogo});
        background-position: -10% 10%;

        & > span {
          background-image: -webkit-linear-gradient(-45deg, #1fa5f0 47%, #00cbfc 100%);
        }
      `;

    default:
      return '';
  }
}

const StyledDownloadButton = styled.a<Partial<DownloadButtonProps>>`
  background-color: white;
  padding: 8px 12px;
  padding-left: 42px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 16px;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 20px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  display: inline-block;
  color: #6a6a6a;
  background-size: 45px;
  background-position: -20% 10%;
  background-repeat: no-repeat;
  transition: transform 300ms ease;

  * > &:hover {
    transform: translateY(-6px);
  }

  ${(p) => addBrowserStyles(p)};

  > span {
    overflow: hidden;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* @media (prefers-color-scheme: dark) {
    background-color: #2b2b2b;
  } */
`;

const EXTENSION_URLS = {
  chrome: '/chrome',
  opera: '/opera',
  firefox: '/firefox',
  btd: '#download-btns',
  edge: '/edge',
  safari: '/safari',
};

interface DownloadButtonProps {
  url?: string;
  browser: keyof typeof EXTENSION_URLS;
  children?: ReactNode;
  className?: string;
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const anchorProps = {
    href: props.url ? props.url : EXTENSION_URLS[props.browser],
    target: props.browser !== 'btd' ? '_blank' : undefined,
    browser: props.browser,
  };

  return (
    <StyledDownloadButton
      href={anchorProps.href}
      target={anchorProps.target}
      browser={anchorProps.browser}
      className={props.className}>
      <span>{props.children ? props.children : props.browser}</span>
    </StyledDownloadButton>
  );
};
