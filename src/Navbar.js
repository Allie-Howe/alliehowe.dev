import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const navItems = ['info', 'portfolio'];

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const container = window.document.body;

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
      <AppBar position='sticky'>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>ah!</Typography>
        <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 5}}>
          {navItems.map((item, index) => (
            <Typography key={index}>{item}</Typography>
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
