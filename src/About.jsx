import { Box, Link, Typography } from '@mui/material'
import { HeadingText } from './Navbar'


const NewTabLink = ({ href, children }) => (
  <Link color='#faa' href={href} target='_blank' rel='noreferrer'>
    {children}
  </Link>
);

export const About = () => {
  return (
    <Box>
      <HeadingText sx={{fontSize: 50}} >who am i?</HeadingText>
      {/* TODO: Should be responsive */}
      <img style={{margin: 5, float: 'right', height: 300, borderRadius: '5%'}} alt='selfie of allie' src={`${process.env.PUBLIC_URL}/images/allie.png`} />
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Typography>
          I'm Allie Howe, a Computer Science BSc (Hons) graduate from the University of Lincoln, currently working for music tech startup <NewTabLink href='http://clicknclear.com/'>ClicknClear</NewTabLink> as a Graduate Software Engineer.
        </Typography>
        <Typography>
          Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.
        </Typography>
        <Typography>
          You can see all of my open source projects, including this site itself, <NewTabLink href='https://github.com/allie-howe'>here</NewTabLink>.
        </Typography>
      </Box>
  </Box>
  )
}