import { Box, Link, Typography } from '@mui/material'
import { HeadingText } from './Navbar'
import allieImg from '/images/allie.webp'


const NewTabLink = ({ href, children }) => (
  <FancyLink href={href} target='_blank' rel='noreferrer'>
    {children}
  </FancyLink>
);
export const FancyLink = ({ href, children, ...restProps }) => (
  <Link className='fancy-link' underline='none' color='#faa' href={href} {...restProps}>
    {children}
  </Link>
)

export const AnchorLink = ({ id }) => (
  <span style={{ position: 'relative', top: '-90px' }} id={id} />
);

export const About = () => {
  const isMobile = window.innerWidth < 600;

  return (
    <Box>
      <AnchorLink id="info" />
      <HeadingText sx={{ fontSize: 50 }} >who am i?</HeadingText>
      <img style={{ margin: '5px auto', display: 'block', verticalAlign: 'middle', float: isMobile ? 'none' : 'right', height: isMobile ? 150 : 300, borderRadius: '5%' }} alt='selfie of allie' src={allieImg} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography>
          I'm Allie Howe, a Computer Science BSc (Hons) graduate from the University of Lincoln, currently working for music tech startup <NewTabLink href='http://clicknclear.com/'>ClicknClear</NewTabLink> as a Graduate Software Engineer.
        </Typography>
        <Typography>
          Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.
        </Typography>
        <Typography>
          You can see all of my open source projects, including this site itself, on my <NewTabLink href='https://github.com/allie-howe'>GitHub</NewTabLink>.
        </Typography>
      </Box>
    </Box>
  )
}
