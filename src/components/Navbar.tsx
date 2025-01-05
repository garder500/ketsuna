"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Avatar, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
// import { Turnstile } from '@marsidev/react-turnstile'
import db from "@/global/database";
import { User } from '@supabase/supabase-js';
import { AccountCircle } from '@mui/icons-material';
export default function Navbar() {
  // const [captchaToken, setCaptchaToken] = React.useState<string>()
  const [currentUser, setCurrentUser] = React.useState<User | null>(null)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  React.useEffect(() => {
      db.auth.getUser().then((user) => {
        if(user && user.data){
          setCurrentUser(user.data.user)
        }
      })
  }, [])

  function authenticate() {
      db.auth.signInWithOAuth({ provider: 'google' })
  }

  function logout() {
    db.auth.signOut().then(() => {
      setCurrentUser(null)
    });
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
            <Link href="/" passHref className='tw-no-underline'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Ketsuna
              </Typography>
            </Link>
            {currentUser == null ? <Button color="inherit" onClick={authenticate}>Login</Button> : <div><IconButton size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                {currentUser.user_metadata.avatar_url ? <Avatar src={currentUser.user_metadata.avatar_url} alt="avatar" className="tw-w-8 tw-h-8 tw-rounded-full" /> : <AccountCircle />}
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu></div>}

          </Toolbar>


        </AppBar>
      </Box>
      {/* <Turnstile siteKey='0x4AAAAAAA4DXA_jcMdiK1_S' onSuccess={(token) => {
        setCaptchaToken(token)
      }}
      /> */}
    </>

  );
}
