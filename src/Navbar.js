import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const navItems = ['info', 'portfolio'];

export const HeadingText = ({ children, sx, ...props }) => (
  <Typography {...props} sx={{ ...sx, fontFamily: 'Playfair Display', textAlign:'center' }}>{children}</Typography>
);

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const container = window.document.body;

  // TODO: Style navbar/drawer on mobile
  const drawer = <Box onClick={() => setDrawerOpen(!drawerOpen)} sx={{ textAlign: 'center' }}>
  <Typography variant="h6" sx={{ my: 2 }}>
    MUI
  </Typography>
  <Divider />
  <List>
    {navItems.map((item) => (
      <ListItem key={item} disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary={item} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Box>

  return (
    <>
      <AppBar position='sticky' sx={{boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', m: 1}}>
        <HeadingText variant='h4'>ah!</HeadingText>
        <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 5}}>
          {navItems.map((item, index) => (
            <HeadingText variant='h6' key={index}>{item}</HeadingText>
          ))}
        </Box>
        <Box sx={{display: {md: 'none'}}}>
          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ mr: 2 }}
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
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },

      }}
    >
      {drawer}
    </Drawer>
  </>
  )
}
