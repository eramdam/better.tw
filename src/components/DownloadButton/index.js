import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classnames.bind(styles);

const EXTENSION_URLS = {
  chrome: 'https://chrome.google.com/webstore/detail/bettertweetdeck-3/micblkellenpbfapmcpcfhcoeohhnpob',
  opera: 'https://addons.opera.com/en/extensions/details/bettertweetdeck/',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/better-tweetdeck-17/',
};

const DownloadButton = (props) => {
  const classes = `${cx('button', props.browser)} ${props.className}`;

  return (
    <a href={props.url ? props.url : EXTENSION_URLS[props.browser]} className={classes} target="_blank">
      <span>Get for {props.browser}</span>
    </a>
  );
};

DownloadButton.propTypes = {
  browser: PropTypes.oneOf(['opera', 'chrome', 'firefox']).isRequired,
  url: PropTypes.string,
  className: PropTypes.string,
};

DownloadButton.defaultProps = {
  url: '',
  className: '',
};

export default DownloadButton;
