module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:security/recommended"
  ],
  plugins: [
    "security"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 0,
    'no-useless-catch': 0,
  },
};
