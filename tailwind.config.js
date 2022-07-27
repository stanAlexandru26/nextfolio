/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');
const headlessui = require('@headlessui/tailwindcss');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    headlessui,
    plugin(function ({ addVariant }) {
      addVariant('firefox', '@-moz-document url-prefix()');
    }),
  ],
};
