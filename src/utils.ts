import { camelCase } from 'change-case';
import feather from 'feather-icons';

export const attrsToProps = obj =>
  Object.keys(obj)
    .filter(i => i !== 'class')
    .reduce((final, key) => {
      const tempResult = {
        ...final,
      };

      tempResult[camelCase(key)] = obj[key];

      return tempResult;
    }, {});

export const iconsList = Object.keys(feather.icons);
