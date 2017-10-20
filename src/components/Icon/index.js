/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  featherIconHelper,
  iconsList,
} from '../../utils';

const Icon = (props) => {
  const { name, size, opts, ...more } = props;
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 0,
      }}
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
