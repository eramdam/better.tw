/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'feather-icons';
import classnames from 'classnames';
import {
  iconsList,
  attrsToProps,
} from '../../utils';

const Icon = (props) => {
  const {
    name, size, ...more
  } = props;
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

export default Icon;
