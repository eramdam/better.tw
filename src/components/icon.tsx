import classnames from 'classnames';
import { icons } from 'feather-icons';
import React, { FC } from 'react';

import { attrsToProps } from '../utils';

export const Icon: FC<{ className?: string; size: number; name: string }> = (props) => {
  const { name, size } = props;
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 0,
      }}>
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
