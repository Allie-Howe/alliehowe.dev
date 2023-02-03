import { Masonry } from '@mui/lab';
import { Box, Paper, ThemeProvider, Typography } from '@mui/material';
import { AnchorLink } from './About';
import { HeadingText } from './Navbar';
import projects from './projects.json';
import { lightTheme } from './Themes/lightTheme';

export const ProjectCards = () => {
  const isMobile = window.innerWidth < 600;

  return (
  <Box>
    <AnchorLink id="portfolio" />
    <ThemeProvider theme={lightTheme}>
      {/* TODO: Ensure gaps are consistent across files etc */}
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2}}>
    <HeadingText sx={{fontSize: 50}} >what have i done?</HeadingText>
    <Typography>Oh god, what have I done? These are just a few of the projects I've worked on over the years:</Typography>
    {/* TODO: Columns should be responsive */}
      <Masonry columns={isMobile ? 1 : 3} spacing={2}>
        {projects.map((project, index) => (
          // TODO: Add hover behaviour
          <Paper sx={{p: 1, display: 'flex', flexDirection: 'column'}} key={index}>
            <HeadingText sx={{textAlign: 'left'}}>{project.name}</HeadingText>
            {project.isVideo
              ? <video style={{margin: 5, maxWidth: '100%', borderRadius: '3%'}} autoPlay muted loop>
                  <source src={`${process.env.PUBLIC_URL}/images/previews/${project.imgUrl}`} type='video/mp4' />
                </video>
              : <img style={{margin: 5, maxWidth: '100%', borderRadius: '3%'}} loading='lazy' alt={`${project.name} preview`} src={`${process.env.PUBLIC_URL}/images/previews/${project.imgUrl}`} />
            }
            <Typography variant='body2'>{project.description}</Typography>
          </Paper>
        ))}
      </Masonry>
    </Box>
    </ThemeProvider>
  </Box>
  )
}
