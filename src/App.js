import { Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { Navbar } from './Navbar';
import { theme } from './theme';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{minHeight: '100vh', backgroundColor: 'black'}}>
      <CssBaseline />
      <Navbar />
      <Container sx={{backgroundColor: 'black'}}>
        <Typography textAlign='center'>hello</Typography>
      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
