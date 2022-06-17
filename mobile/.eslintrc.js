module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
    'react/no-unstable-nested-components': 0,
    'import/no-extraneous-dependencies': 0,
    'func-names': 0,
  },
};
