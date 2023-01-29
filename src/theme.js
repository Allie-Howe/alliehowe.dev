import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ccc',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
    fontSize: 24,
    fontWeightRegular: 200,
    fontWeightMedium: 100,
  }
});
