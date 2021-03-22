module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  plugins: ['unused-imports', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  globals: {
    __PATH_PREFIX__: true,
    graphql: true,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'simple-import-sort/imports': 2,
    'unused-imports/no-unused-imports': 2,
    'react/prop-types': [2, { ignore: ['children'] }],
  },
};
