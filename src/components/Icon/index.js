/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import {
  featherIconHelper,
  iconsList,
} from '../../utils';

const Icon = (props) => {
  const { name, size, opts, ...more } = props;
  return (
    <span
      {...more}
      dangerouslySetInnerHTML={{
        __html: featherIconHelper(name, size, opts)
      }}
    />
  );
};


Icon.propTypes = {
  name: PropTypes.oneOf(iconsList),
  size: PropTypes.number,
  opts: PropTypes.object,
}

Icon.defaultProps = {
  name: 'activity',
  size: null,
  opts: {},
}

export default Icon;
