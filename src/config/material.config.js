import { createTheme } from '@mui/material/styles';

import colorsConfig from './colors.js';
export default createTheme({
  palette: {
    ...colorsConfig.color,
    ...colorsConfig.background,
  },
});
