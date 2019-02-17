import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <small className={styles.copy}>
      Better TweetDeck is not affiliated with Twitter or TweetDeck.
    </small>
    <nav className={styles.menu}>
      <Link to="/releases">Release notes</Link>
      <a href="https://github.com/eramdam/BetterTweetDeck">GitHub</a>
      <a href="https://twitter.com/BetterTDeck">Follow Us</a>
    </nav>
  </footer>
);

export default Footer;
