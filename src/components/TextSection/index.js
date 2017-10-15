import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const imgPath = url => `${__PATH_PREFIX__}/img/${url}`;

const TextSection = ({ title, paragraph, image }) => (
  <section className={styles.textSection}>
    <div>
      <div className={styles.sectionCopy}>
        <h4>{title}</h4>
        <p className={styles.sectionParagraph}>{paragraph}</p>
      </div>
      <img className={styles.sectionImage} src={imgPath(image)} alt="" />
    </div>
  </section>
);


TextSection.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
};

TextSection.defaultProps = {
  title: 'Lorem Ipsum',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit repellat placeat, est delectus nemo labore expedita possimus minus impedit molestias illo officiis voluptate maiores quaerat, inventore aut ipsam ducimus!',
  image: 'test-img.png',
};

export default TextSection;
