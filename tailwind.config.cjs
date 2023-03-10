/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        default: colors.neutral['50'],
      },
      colors: {
        primary: colors.neutral['900'],
        secondary: '#00FF00',
      },
    },
    fontFamily: {
      sans: ['Agency', 'sans-serif'],
    },
  },
  plugins: [],
};
