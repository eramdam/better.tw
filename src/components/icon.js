/* eslint react/no-danger: 0 */
import classnames from 'classnames';
import { icons } from 'feather-icons';
import PropTypes from 'prop-types';
import React from 'react';

import { attrsToProps, iconsList } from '../utils';

export const Icon = (props) => {
  const { name, size, ...more } = props;
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 0,
      }}
      {...more}
    >
      <svg
        {...attrsToProps(icons[name].attrs)}
        {...{
          className: classnames(icons[name].attrs.class),
          width: size,
          height: size,
        }}
        dangerouslySetInnerHTML={{
          __html: icons[name].contents,
        }}
      />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(iconsList),
  size: PropTypes.number,
};

Icon.defaultProps = {
  name: 'activity',
  size: null,
};
