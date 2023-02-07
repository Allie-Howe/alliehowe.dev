import { createTheme } from '@mui/material';
import { sharedTheme } from './sharedTheme';

export const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'dark',
    text: {
      primary: '#ccc',
    },
  },
});
