import feather from 'feather-icons';

export const featherIconsList = Object.keys(feather.icons);

export const featherIconHelper = (name, size, opts = {}) => feather.toSvg(name, { width: size, height: size, ...opts });
