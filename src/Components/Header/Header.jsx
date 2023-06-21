import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import logo from '/images/logo.png'


console.log(logo);
const navItems = ['Docs', 'About'];

function DrawerAppBar() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color='default' elevation={0}>
        <Toolbar>
          <Box sx={{flexGrow : 1}}>
          <Avatar sx={{ width: 50, height: 50 }} alt='logo' src={logo}></Avatar>
          </Box>
          <Box sx={{ display: {sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ fontWeight : 'bold' ,  color: '#000' }}>
                {item}
              </Button>
            ))}
            <Button variant='outlined' color='warning' sx={{color:'#000' , fontWeight : 'bold'}}>Support Us</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
