import React from 'react';
import PropTypes from 'prop-types';
import {
  isFunction,
} from 'lodash';
import styles from './index.module.css';

const imgPath = url => `${__PATH_PREFIX__}/img/${url}`;

const renderTextProp = (prop) => {
  return isFunction(prop) ? prop() : prop;
};

const TextSection = ({ title, paragraph, image, ...more }) => {
  return (
    <section className={styles.textSection}>
      <div className={styles.textSectionGrid}>
        <div className={styles.sectionCopy}>
          <h4>{title}</h4>
          <p className={styles.sectionParagraph}>{renderTextProp(paragraph)}</p>
        </div>
        <img className={styles.sectionImage} src={imgPath(image)} alt="" {...more} />
      </div>
    </section>
  )
};


TextSection.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  image: PropTypes.string,
};

TextSection.defaultProps = {
  title: 'Lorem Ipsum',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit repellat placeat, est delectus nemo labore expedita possimus minus impedit molestias illo officiis voluptate maiores quaerat, inventore aut ipsam ducimus!',
  image: 'test-img.png',
};

export default TextSection;
