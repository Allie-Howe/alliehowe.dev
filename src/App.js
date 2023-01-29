import { Box, Container, CssBaseline, Link, ThemeProvider, Typography } from '@mui/material';
import { HeadingText, Navbar } from './Navbar';
import { theme } from './theme';

const NewTabLink = ({ href, children }) => (
  <Link color='#faa' href={href} target='_blank' rel='noreferrer'>
    {children}
  </Link>
);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{minHeight: '100vh', backgroundColor: 'black'}}>
      <CssBaseline />
      <Navbar />
      <Container>
        <HeadingText sx={{fontSize: 50}} >who am i?</HeadingText>
        <img style={{margin: 5, float: 'right', height: 300, borderRadius: '5%'}} alt='selfie of allie' src={`${process.env.PUBLIC_URL}/images/allie.png`} />
        <Typography>
          I'm Allie Howe, a Computer Science BSc (Hons) graduate from the University of Lincoln, currently working for music tech startup <NewTabLink href='http://clicknclear.com/'>ClicknClear</NewTabLink> as a Graduate Software Engineer.
        </Typography>
        <Typography>
          Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.
        </Typography>
        <Typography>
          You can see all of my open source projects, including this site itself, <NewTabLink href='https://github.com/allie-howe'>here</NewTabLink>.
        </Typography>
      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
