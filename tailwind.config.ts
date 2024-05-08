/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';
// const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#1f635e',
      'primary-sub': '#3FB4A5',
      'primary-medium': '#77B0AA',
      'primary-light': '#E3FEF7',
      secondary: '#F7FAFC',
      'secondary-lightGray': '#eaeaea',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/line-clamp'),
  ],
});
