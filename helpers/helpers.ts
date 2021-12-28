import { camelCase } from "change-case";
import clsx from "clsx";
import { FeatherAttributes } from "feather-icons";

export const cx = clsx;

export const attrsToProps = (obj: FeatherAttributes) =>
  Object.keys(obj)
    .filter(i => i !== "class")
    .reduce((final, key) => {
      return {
        ...final,
        [camelCase(key)]: obj[key],
      };
    }, {});
