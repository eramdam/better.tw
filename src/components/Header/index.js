import React from 'react';
import styles from './index.module.css';
import Icon from '../Icon';

export default () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <a className={styles.menuItem} href="https://github.com/eramdam/BetterTweetDeck">
        <Icon
          name="github"
          className={styles.menuItemIcon}
          size={20}
        />
        Github
      </a>
      <a className={styles.menuItem} href="https://twitter.com/BetterTDeck">
        <Icon
          name="twitter"
          className={styles.menuItemIcon}
          size={20}
        />
        Twitter
      </a>
    </nav>
    <span className={styles.content}>
      <span className={styles.img}>
        <svg viewBox="0 0 256 256" width={96}>
          <path id="a" d="M167.436757,215.316757 L128.275433,254.478081 L89.1141091,215.316757 L27.6778,215.316757 C12.3917732,215.316757 0,202.927798 0,187.642977 L0,27.6737801 C0,12.3899734 12.3906357,-5.68434189e-14 27.6778,-5.68434189e-14 L228.3222,-5.68434189e-14 C243.608227,-5.68434189e-14 256,12.3889588 256,27.6737801 L256,187.642977 C256,202.926783 243.609364,215.316757 228.3222,215.316757 L167.436757,215.316757 L167.436757,215.316757 Z M142.625275,124.070836 L180.116989,124.070836 L180.116989,95.9286773 L142.625275,95.9286773 L142.625275,58.8109463 L113.548161,58.8109463 L113.548161,95.9286773 L76.0564481,95.9286773 L76.0564481,124.070836 L113.548161,124.070836 L113.548161,161.469054 L142.625275,161.469054 L142.625275,124.070836 Z" />
        </svg>
      </span>
      <span className={styles.copy}>
        <h1>Better TweetDeck</h1>
        <p>TweetDeck, but every feature is supercharged and there is a lot of them.</p>
      </span>
    </span>
  </header>
);
