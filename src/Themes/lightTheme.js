import { createTheme } from '@mui/material';
import { sharedTheme } from './sharedTheme';

export const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    text: {
      primary: '#666',
    },
    background: {
      paper: 'rgba(248, 248, 255, 0.9333333333)',
    }
  }
});