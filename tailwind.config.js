/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const defaultColors = require('tailwindcss/colors');
import colorsConfig from './src/config/colors.js';
const getConfig = (colorsConfig) => {
  const config = {};
  // Object.keys(colorsConfig.color).forEach((key) => {
  //   config[key] = colorsConfig.color[key].main;
  // });
  // Object.keys(colorsConfig.background).forEach((key) => {
  //   config[key] = colorsConfig.background[key].main;
  // });
  Object.keys(colorsConfig).forEach((key) => {
    const currentConfig = colorsConfig[key];
    Object.keys(currentConfig).forEach((key) => {
      config[key] = currentConfig[key].main;
    });
  });
  return config;
};

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...defaultColors,
      ...getConfig(colorsConfig),
    },
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
});
