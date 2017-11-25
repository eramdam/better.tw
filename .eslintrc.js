module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    '__PATH_PREFIX__': true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/accessible-emoji': 0,
    'max-len': 0,
    'react/forbid-prop-types': [2, { "forbid": ['any'] }],
    'react/no-unescaped-entities': 0,
    'jsx-a11y/media-has-caption': 0,
  }
};

