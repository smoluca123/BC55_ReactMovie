/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const defaultColors = require('tailwindcss/colors');
import colorsConfig from './src/config/colors.js';
const getConfig = (colorsConfig) => {
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
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...defaultColors,
      ...getConfig(colorsConfig),
    },
    container: {
      center: true,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        neonGlow: 'neonGlow 1s ease-in-out infinite',
        neonGlowHover: 'neonGlowHover 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        neonGlow: {
          '0%': {
            boxShadow:
              '0 0 5px rgb(59 130 246 / 0.5), 0 0 10px rgb(59 130 246 / 0.5), 0 0 15px rgb(59 130 246 / 0.5)',
          },
          '50%': {
            boxShadow:
              '0 0 8px rgb(59 130 246 / 0.5), 0 0 15px rgb(59 130 246 / 0.5), 0 0 20px rgb(59 130 246 / 0.5)',
          },
          '100%': {
            boxShadow:
              '0 0 5px rgb(59 130 246 / 0.5), 0 0 10px rgb(59 130 246 / 0.5), 0 0 15px rgb(59 130 246 / 0.5)',
          },
        },
        neonGlowHover: {
          '0%': {
            boxShadow:
              '0 0 5px #32ffab, 0 0 10px rgba(0, 255, 204, 0.8), 0 0 15px #32ffab',
          },
          '50%': {
            boxShadow:
              '0 0 8px #32ffab, 0 0 15px rgba(0, 255, 204, 0.8), 0 0 20px #32ffab',
          },
          '100%': {
            boxShadow:
              '0 0 5px #32ffab, 0 0 10px rgba(0, 255, 204, 0.8), 0 0 15px #32ffab',
          },
        },
      },
      transitionTimingFunction: {
        cubic_1: 'cubic-bezier(1,.42,.54,.74)',
      },
      screens: {
        _sm: '640px',
      },
    },
  },
  plugins: [],
});
