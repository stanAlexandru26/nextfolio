module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],

  plugins: [
    'react',
    'simple-import-sort',
    'unused-imports',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',

    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],

    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
