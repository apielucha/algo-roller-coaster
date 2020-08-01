const path = require('path');

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
    'prettier', // Should be last in "extends" list to override style rules.
  ],
  plugins: ['jsdoc', 'prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [
      'off',
      { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true },
    ],
    'no-underscore-dangle': 'off',
    'import/exports-last': 'warn',
    'import/group-exports': 'warn',
    'import/no-commonjs': 'warn',
    'import/prefer-default-export': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.js',
          '**/*.test.js',
          path.resolve('./babel.config.js'),
          path.resolve('./prettier.config.js'),
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsdoc/require-description': 'warn',
    'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
