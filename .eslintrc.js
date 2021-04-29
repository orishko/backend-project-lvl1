module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
  },
};
