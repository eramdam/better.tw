import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Icon from '../Icon';

const FeatureBlock = ({ name, paragraph, icon }) => (
  <div className={styles.block}>
    <Icon
      className={styles.blockIcon}
      name={icon}
    />
    <div className={styles.blockCopy}>
      <h5>{name}</h5>
      <p className={styles.blockParagraph}>{paragraph}</p>
    </div>
  </div>
);

FeatureBlock.propTypes = {
  name: PropTypes.string,
  paragraph: PropTypes.string,
  icon: PropTypes.string,
};

FeatureBlock.defaultProps = {
  name: 'Lorem ipsum',
  paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magni assumenda delectus eos cumque quaerat sequi consectetur molestias nesciunt voluptate veritatis aliquam quos. Repellat quae non sit quod tenetur ipsam?',
  icon: 'activity',
};

const FeaturesGrid = () => (
  <div className={styles.featuresGrid}>
    <div className={styles.featuresGridWrap}>
      <h4>Features for years!</h4>
      <div className={styles.blocks}>
        <FeatureBlock
          name="Advanced customization"
          icon="sliders"
          paragraph="Better TweetDeck offers countless customization options. Not enough? Paste your own custom CSS for endless possibilities."
        />
        <FeatureBlock
          name="I miss the old replies..."
          icon="at-sign"
          paragraph="Don't like Twitter's new reply display? Better TweetDeck got you covered!"
        />
        <FeatureBlock
          name="Control (the display of) time"
          icon="clock"
          paragraph="Whether you're more MM/DD/YYYY or DD/MM/YYYY or something else entirely, YOU got the control!"
        />
        <FeatureBlock
          name="Edit your tweets"
          icon="edit-3"
          paragraph="That's not a real edit, but Better TweetDeck allows you to quickly re-send a fixed version of your tweets."
        />
        <FeatureBlock
          name="Advanced muting"
          icon="mic-off"
          paragraph="Quickly mute #hashtags, specific apps or be even more specific with Regular Expressions."
        />
        <FeatureBlock
          name="Skip t.co redirections"
          icon="external-link"
          paragraph="Want to reduce tracking and/or on a slow connection? Automatically expand links in tweets."
        />
        <FeatureBlock
          name="Stay alert"
          icon="alert-circle"
          paragraph="Don't want to miss a tweet or a DM? Better TweetDeck can highlight it in your browser's tab so you never miss anything."
        />
        <FeatureBlock
          name="Download GIFs/videos"
          icon="download"
          paragraph="Ever wanted to get a nice GIF or video from a Twitter account? Now it's one click away!"
        />
        <FeatureBlock
          name="No peeking!"
          icon="eye-off"
          paragraph="Want to avoid ppl peeking over your DMs? Collapse your read conversations for a little bit of privacy."
        />
      </div>
    </div>
  </div>
);

export default FeaturesGrid;
