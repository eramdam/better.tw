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
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
        <FeatureBlock
          name="Feature 1"
          icon="copy"
          paragraph="This feature is so amazing dude, you have NO IDEA"
        />
      </div>
    </div>
  </div>
);

export default FeaturesGrid;
