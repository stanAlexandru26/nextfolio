/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    plugin(function ({ addVariant }) {
      addVariant('firefox', '@-moz-document url-prefix()');
    }),
  ],
};
