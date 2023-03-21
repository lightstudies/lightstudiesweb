/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Agency', 'sans-serif'],
      'default-sans': [...defaultTheme.fontFamily.sans],
    },
    extend: {
      screens: {
        'md+': '850px',
      },
    },
  },
  plugins: [],
};
