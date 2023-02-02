import { Box } from '@mui/material'
import { HeadingText } from './Navbar'

const icons = ['twitter', 'email', 'github', 'linkedin'];

export const Splash = () => {
  return (
    <Box sx={{width: '100%', backgroundColor: 'white', p: '60px 0'}} className="splash">
      <HeadingText sx={{fontSize: 175, color: '#000A'}}>hey.</HeadingText>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 5, mt: 5}}>
        {
          icons.map((icon, index) => (
            <img key={index} alt={icon} src={`${process.env.PUBLIC_URL}/images/icons/${icon}.svg`} width='100px' />
          ))
        }
      </Box>
    </Box>
  )
}
