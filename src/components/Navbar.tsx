"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Typography } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Link href="/" passHref className='tw-no-underline'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ketsuna
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
