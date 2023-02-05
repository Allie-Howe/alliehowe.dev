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
      paper: '#f8f8ffee',
    }
  },
  typography: {
    ...sharedTheme.typography,
    fontWeightRegular: 400,
  }
});
