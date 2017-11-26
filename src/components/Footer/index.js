import React from 'react';
// import PropTypes from 'prop-types';
import styles from './index.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <small className={styles.copy}>
      Better TweetDeck is not affiliated with Twitter or TweetDeck.
    </small>
    <nav className={styles.menu}>
      <a href="https://github.com/eramdam/BetterTweetDeck">GitHub</a>
      <a href="https://twitter.com/BetterTDeck">Follow Us</a>
    </nav>
  </footer>
);

export default Footer;
