/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const defaultColors = require('tailwindcss/colors');
import colorsConfig from './src/config/colors.js';
const getConfig = (colorsConfig) => {
  // const config = {};
  // Object.keys(colorsConfig).forEach((key) => {
  //   const currentConfig = colorsConfig[key];
  //   Object.keys(currentConfig).forEach((key) => {
  //     config[key] = currentConfig[key].main;
  //   });
  // });
  // return config;
  ///
  // const config = {};
  // Object.keys(colorsConfig).forEach((key) => {
  //   let currentConfig = colorsConfig[key];
  //   Object.keys(currentConfig).forEach((key) => {
  //     const current2 = currentConfig[key];
  //     const children = {};
  //     Object.keys(current2).forEach((key) => {
  //       children[key] = current2[key];
  //     });
  //     config[key] = { ...children };
  //   });
  // });
  // return config;

  //! config ngon nhất, đừng sửa! -> Luca Thân Ái~~
  const config = {};
  Object.keys(colorsConfig).forEach((key) => {
    let currentConfig = colorsConfig[key];
    Object.keys(currentConfig).forEach((key) => {
      const current = currentConfig[key];
      config[key] = { ...current };
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
