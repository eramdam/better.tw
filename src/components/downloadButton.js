import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const chromeLogo = require('../img/chrome-icon.png');
const firefoxLogo = require('../img/firefox-icon.png');
const operaLogo = require('../img/opera-icon.png');
const edgeLogo = require('../img/edge-icon.png');
const btdLogo = require('../img/btd-icon.png');

const whiteOverlayBtn = 'linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .75))';

function addBrowserStyles({ browser }) {
  switch (browser) {
    case 'chrome':
      return css`
        background-image: ${whiteOverlayBtn}, url(${chromeLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #4285f4, #2962bd);
        }
      `;

    case 'edge':
      return css`
        background-image: ${whiteOverlayBtn}, url(${edgeLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #4285f4, #2962bd);
        }
      `;

    case 'opera':
      return css`
        background-image: ${whiteOverlayBtn}, url(${operaLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #cc0f16, #980910);
        }
      `;

    case 'firefox':
      return css`
        background-image: ${whiteOverlayBtn}, url(${firefoxLogo});

        & > span {
          background-image: -webkit-linear-gradient(top, #ff9500, #e66000);
        }
      `;

    case 'btd':
      return css`
        background-image: ${whiteOverlayBtn}, url(${btdLogo});

        & > span {
          background-image: -webkit-linear-gradient(-45deg, #00a0fb 47%, #00cbfc 100%);
        }
      `;

    default:
      return '';
  }
}

const StyledDownloadButton = styled.a`
  background-color: white;
  padding: 0.9em 0.8em;
  padding-left: calc(0.8em + 48px);
  border-radius: 4px;
  font-size: 16px;
  box-shadow: inset 0 0 0 1px white, 0 0 1px 0px rgba(0, 0, 0, 0.2), 0 2px 20px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #6a6a6a;
  background-size: auto, 96px;
  background-position: -10% 10%;
  background-repeat: no-repeat;
  transition: all 300ms ease;

  &:hover {
    transform: translateY(-6px);
    background-color: #c0c0c0;
  }

  ${p => addBrowserStyles(p)};

  > span {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const EXTENSION_URLS = {
  chrome: '/chrome',
  opera: '/opera',
  firefox: '/firefox',
  btd: '#download-btns',
  edge: '/edge'
};

export const DownloadButton = props => {
  const anchorProps = {
    href: props.url ? props.url : EXTENSION_URLS[props.browser],
    target: props.browser !== 'btd' ? '_blank' : undefined,
    browser: props.browser
  };

  return (
    <StyledDownloadButton {...anchorProps} className={props.className}>
      <span>{props.text ? props.text : `Get for ${props.browser}`}</span>
    </StyledDownloadButton>
  );
};

DownloadButton.propTypes = {
  browser: PropTypes.oneOf(['opera', 'chrome', 'firefox', 'btd']).isRequired,
  url: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};

DownloadButton.defaultProps = {
  url: '',
  text: '',
  className: ''
};
