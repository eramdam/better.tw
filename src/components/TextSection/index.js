import React from 'react';
import PropTypes from 'prop-types';
import {
  isFunction,
} from 'lodash';
import classnames from 'classnames/bind';
import styles from './index.module.css';

const cx = classnames.bind(styles);

const imgPath = url => `${__PATH_PREFIX__}/img/${url}`;

const renderTextProp = prop => (isFunction(prop) ? prop() : prop);

const TextSection = ({
  title, paragraph, image, video, vertical, ...more
}) => (
  <section className={styles.textSection}>
    <div className={cx('textSectionGrid', {
      vertical,
    })}
    >
      <div className={styles.sectionCopy}>
        <h4>{title}</h4>
        <p className={styles.sectionParagraph}>{renderTextProp(paragraph)}</p>
      </div>
      {video ?
        <video src={imgPath(video)} className={styles.sectionImage} poster={imgPath(image)} muted autoPlay preload {...more} />
       : <img className={styles.sectionImage} src={imgPath(image)} alt="" {...more} />}
    </div>
  </section>
);


TextSection.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  image: PropTypes.string,
  video: PropTypes.string,
  vertical: PropTypes.bool,
};

TextSection.defaultProps = {
  title: 'Lorem Ipsum',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sit repellat placeat, est delectus nemo labore expedita possimus minus impedit molestias illo officiis voluptate maiores quaerat, inventore aut ipsam ducimus!',
  image: 'test-img.png',
  video: undefined,
  vertical: false,
};

export default TextSection;
