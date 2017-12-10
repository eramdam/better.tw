import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classnames.bind(styles);

const EXTENSION_URLS = {
  chrome: 'https://chrome.google.com/webstore/detail/bettertweetdeck-3/micblkellenpbfapmcpcfhcoeohhnpob',
  opera: 'https://addons.opera.com/en/extensions/details/bettertweetdeck/',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/better-tweetdeck-17/',
  btd: '#download-btns',
};

const DownloadButton = (props) => {
  const classes = `${cx('button', props.browser)} ${props.className}`;
  const anchorProps = {
    href: props.url ? props.url : EXTENSION_URLS[props.browser],
    className: classes,
    target: props.browser !== 'btd' ? '_blank' : undefined,
  };

  return (
    <a {...anchorProps}>
      <span>{props.text ? props.text : `Get for ${props.browser}`}</span>
    </a>
  );
};

DownloadButton.propTypes = {
  browser: PropTypes.oneOf(['opera', 'chrome', 'firefox', 'btd']).isRequired,
  url: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

DownloadButton.defaultProps = {
  url: '',
  text: '',
  className: '',
};

export default DownloadButton;
