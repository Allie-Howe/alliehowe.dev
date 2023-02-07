import { Box } from '@mui/material'
import { ForwardedRef, forwardRef } from 'react';
import { HeadingText } from './Navbar'

const icons = [
  { imgPath: 'email', link: 'mailto:howeisallie@gmail.com' },
  { imgPath: 'instagram', link: 'https://instagram.com/allie.on.the.web' },
  { imgPath: 'github', link: 'https://www.github.com/Allie-Howe' },
  { imgPath: 'linkedin', link: 'https://linkedin.com/in/Allie-Howe' },
];

export const Splash = forwardRef((_, ref: ForwardedRef<any>) => {
  // TODO: Find a universal way to detect mobile
  const isMobile = window.innerWidth < 600;
  return (<>
    <Box sx={{ width: '100%', p: '60px 0', boxShadow: '0 5px 20px #FFF8' }} className="splash">
      <HeadingText sx={{ fontSize: 175, color: '#000A' }}>hey.</HeadingText>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mt: 5 }}>
        {
          icons.map(({ imgPath, link }, index) => (
            <a href={link} key={index} target='_blank' rel='noopener noreferrer'>
              <img alt={imgPath} src={`images/icons/${imgPath}.svg`} width={isMobile ? '50px' : '100px'} />
            </a>
          ))
        }
      </Box>
    </Box>
    <div ref={ref} />
  </>)
})
