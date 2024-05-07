/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';
// const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#1f635e',
      secondary: '#F7FAFC',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/line-clamp'),
  ],
});
