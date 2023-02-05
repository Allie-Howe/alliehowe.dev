import { createTheme } from '@mui/material';
import { sharedTheme } from './sharedTheme';

export const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    primary: {
      main: '#121212',
      dark: '#FAA',
    },
    text: {
      primary: '#666',
    },
    background: {
      paper: 'rgba(248, 248, 255, 0.9333333333)',
    }
  },
  typography: {
    ...sharedTheme.typography,
    fontWeightRegular: 400,
  }
});
