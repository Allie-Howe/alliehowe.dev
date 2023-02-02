import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { About } from './About';
import { Navbar } from './Navbar';
import { ProjectCards } from './ProjectCards';
import { Splash } from './Splash';
import { darkTheme } from './Themes/darkTheme';
import { useNavbarObservers } from './useNavbarObservers';

function App() {
  const { splashRef, topRef, position } = useNavbarObservers();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{minHeight: '100vh'}}>
        <CssBaseline />
        <Navbar ref={topRef} position={position} />
        <Splash ref={splashRef} />
        <Container sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
          <About />
          <ProjectCards />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
