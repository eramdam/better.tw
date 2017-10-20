import feather from 'feather-icons';

export const featherIconHelper = (name, size, opts = {}) => feather.toSvg(name, { width: size, height: size, ...opts });

export const iconsList = Object.keys(feather.icons);
