import { AppBar, Box, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ThemeProvider, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { theme } from './theme';

const navItems = ['info', 'portfolio'];

function App() {
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
    <ThemeProvider theme={theme}>
      <Box sx={{minHeight: '100vh', backgroundColor: 'black'}}>
      <CssBaseline />
        <AppBar position='sticky'>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography>ah!</Typography>
            <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 5}}>
              <Typography>info</Typography>
              <Typography>portfolio</Typography>
            </Box>
            <Box sx={{display: {xs: 'unset', md: 'none'}}}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setDrawerOpen(!drawerOpen)}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },

          }}
        >
          {drawer}
        </Drawer>
        </Box>
        <Container sx={{backgroundColor: 'black'}}>
          <Typography textAlign='center'>hello</Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
