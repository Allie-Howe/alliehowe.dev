import { Masonry } from '@mui/lab';
import { Box, Button, Paper, ThemeProvider, Typography } from '@mui/material';
import { AnchorLink } from './About';
import { HeadingText } from './Navbar';
import projects from './projects.json';
import { lightTheme } from './Themes/lightTheme';

const changeAlpha = (hex, hexAlpha) => {
  return hex.slice(0, 7) + hexAlpha;
}

const styles = {
  '&:hover': {
    backgroundColor: changeAlpha(lightTheme.palette.background.paper, 'dd'),
    transition: '0.2s ease-in-out',
    '.button': {
      backgroundColor: '#faa',
      '&:hover': {
        backgroundColor: '#e99',
      }
    },
  }
}

const appendPublicIfLocal = (url) => url.startsWith('http') ? url : `${process.env.PUBLIC_URL}/${url}`;

export const ProjectCards = () => {
  const isMobile = window.innerWidth < 600;

  return (
  <Box>
    <AnchorLink id="portfolio" />
      {/* TODO: Ensure gaps are consistent across files etc */}
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2}}>
      <HeadingText sx={{fontSize: 50}} >what have i done?</HeadingText>
      <Typography>Oh god, what have I done? These are just a few of the projects I've worked on over the years:</Typography>
      <ThemeProvider theme={lightTheme}>
        <Masonry columns={isMobile ? 1 : 3} spacing={2}>
          {projects.map((project, index) => (
            <Paper sx={{py: 1, px: 2, display: 'flex', flexDirection: 'column', gap: 2, ...styles}} key={index}>
              <HeadingText sx={{textAlign: 'left'}}>{project.name}</HeadingText>
              {project.isVideo
                ? <video style={{margin: 5, maxWidth: '100%', borderRadius: '3%'}} autoPlay muted loop>
                    <source src={appendPublicIfLocal(`images/previews/${project.imgUrl}`)} type='video/mp4' />
                  </video>
                : <img style={{margin: 5, maxWidth: '100%', borderRadius: '3%'}} alt={`${project.name} preview`} src={appendPublicIfLocal(`images/previews/${project.imgUrl}`)} />
              }
              <Typography variant='body2'>{project.description}</Typography>
              <Box sx={{display: 'flex', justifyContent: 'center', gap: 2}}>
                {project.buttons.map(({title, url}, index) => (
                  <Button key={index} href={appendPublicIfLocal(url)} sx={{flex: 1}} className='button' variant='contained'><Typography variant='caption'>{title}</Typography></Button>
                ))}
              </Box>
            </Paper>
          ))}
        </Masonry>
      </ThemeProvider>
    </Box>
  </Box>
  )
}
