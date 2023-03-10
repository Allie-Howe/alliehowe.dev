import { AppBar, Box, Divider, Drawer, IconButton, LinkProps, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { FancyLink } from './About';

const navItems = ['info', 'portfolio'];

export const HeadingText = ({ children, sx, ...props }: LinkProps) => (
  <Typography {...props} sx={{ fontFamily: 'Playfair Display', textAlign: 'center', ...sx }}>{children}</Typography>
);

interface NavbarItemProps extends LinkProps { item: string }
const NavbarItem = ({ item, sx }: NavbarItemProps) => (
  <FancyLink sx={{ color: 'unset', ...sx }} underline='none' href={`#${item}`}>
    <HeadingText variant='h6'>{item}</HeadingText>
  </FancyLink>
);

export const Navbar = ({ position }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const container = window.document.body;

  // TODO: Style navbar/drawer on mobile
  const drawer = (
    <Box onClick={() => setDrawerOpen(!drawerOpen)} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h6" sx={{ my: 2 }}>allie howe</Typography>
      <Divider />
      {navItems.map((item, index) => (
        <NavbarItem key={index} sx={{ textAlign: 'center' }} item={item} />
      ))}
    </Box>
  );

  // TODO: Make this more elegant
  const styles: any = {}
  if (position === 'top') {
    styles.background = 'transparent'
    styles.boxShadow = 'none'
    styles.color = '#000A'
  } else if (position === 'dark') {
    styles.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'
    styles.backgroundColor = '#000D'
    styles.backdropFilter = 'blur(4px)'
  } else {
    styles.color = '#000A'
    styles.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'
    styles.backgroundColor = '#FFF6'
    styles.backdropFilter = 'blur(4px)'
  }

  return (
    <>
      <AppBar sx={{ transition: '.4s', ...styles }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
          <HeadingText variant='h4'>ah!</HeadingText>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
            {navItems.map((item, index) => (
              <NavbarItem key={index} item={item} />
            ))}
          </Box>
          <Box sx={{ display: { md: 'none' } }}>
            <IconButton
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="open drawer"
              sx={{ mr: 2, color: styles.color }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', backgroundColor: '#000D', backdropFilter: 'blur(4px)' },

        }}
      >
        {drawer}
      </Drawer>
    </>
  )
};
