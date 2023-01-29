import { AppBar, Box, Container, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{minHeight: '100vh', backgroundColor: 'black'}}>
      <CssBaseline />
        <AppBar position='sticky'>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography>ah!</Typography>
            <Box sx={{display: 'flex', gap: 5}}>
              <Typography>info</Typography>
              <Typography>portfolio</Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Container sx={{backgroundColor: 'black'}}>
          <Typography textAlign='center'>hello</Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
