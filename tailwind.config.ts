/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';
// const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1f635e',
        sub: '#3FB4A5',
        medium: '#77B0AA',
        light: '#E3FEF7',
      },
      secondary: {
        DEFAULT: '#F7FAFC',
        lightGray: '#eaeaea',
        lightestBlue: '#e1f5f3',
        lighterBlue: '#a3dcd5',
        midBlue: '#246c67',
        darkBlue: '#003c43',
      },
      danger: {
        DEFAULT: '#FA6216',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    screens: {
      xs: '350px',
    },
    extend: {
      zIndex: {
        '100': '100',
        max: '9999',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/line-clamp'),
  ],
});
