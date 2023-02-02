import { Box } from '@mui/material'
import { forwardRef } from 'react';
import { HeadingText } from './Navbar'

import './Splash.scss';

const icons = [
  {imgPath: 'twitter', link: 'https://www.twitter.com/ScaredComputers'},
  {imgPath: 'email', link: 'mailto:howeisallie@gmail.com'},
  {imgPath: 'github', link: 'https://www.github.com/Allie-Howe'},
  {imgPath: 'linkedin', link: 'https://linkedin.com/in/Allie-Howe'}
];

export const Splash = forwardRef((_, ref) => {
  return (<>
    <Box sx={{width: '100%', p: '60px 0'}} className="splash">
      <HeadingText sx={{fontSize: 175, color: '#000A'}}>hey.</HeadingText>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 5, mt: 5}}>
        {
          icons.map(({imgPath, link}, index) => (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <img key={index} alt={imgPath} src={`${process.env.PUBLIC_URL}/images/icons/${imgPath}.svg`} width='100px' />
            </a>
          ))
        }
      </Box>
    </Box>
    <div ref={ref} />
  </>)
})
