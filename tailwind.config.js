/** @type {import('tailwindcss').Config} */

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

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...getConfig(colorsConfig),
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
