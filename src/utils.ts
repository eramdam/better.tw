import { camelCase } from 'change-case';
import feather, { FeatherAttributes } from 'feather-icons';

export const attrsToProps = (obj: FeatherAttributes) =>
  Object.keys(obj)
    .filter((i) => i !== 'class')
    .reduce((final, key) => {
      return {
        ...final,
        [camelCase(key)]: obj[key],
      };
    }, {});

export const iconsList = Object.keys(feather.icons);
