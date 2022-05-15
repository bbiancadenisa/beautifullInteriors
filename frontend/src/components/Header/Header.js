import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const pages = ['Designs', 'Contact'];

const Header = ({isAuth, setIsAuth}) => {

  const navigate = useNavigate()

const handlePageRedirect = (page) => {
  console.log(page)
  switch(page) {
      case 'Designs':
        navigate('/designs')
        break;
      case 'Contact':
        navigate('/contact')
        break;
      case 'Login':
        navigate('/login')
        break;
    default: break
  }
}

  const logOutUser = () => {
    localStorage.clear()
    setIsAuth(false)
    navigate('/login')
  }

  return (
    <AppBar style={{backgroundColor: '#2C1114'}}position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: "white"
              }
            }}
          >
            LOGO
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {isAuth && <Button
                onClick={() => handlePageRedirect('Designs')}
                key={'Designs'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {'Designs'}
              </Button>}
              <Button
                onClick={() => handlePageRedirect('Contact')}
                key={'Contact'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {'Contact'}
              </Button>
              {!isAuth &&
              <Button
                onClick={() => handlePageRedirect('Login')}
                key={'Login'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {'Login'}
              </Button>}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          {isAuth &&
            <Button onClick={logOutUser} sx={{ my: 2, color: 'white', display: 'block', }}>
                Logout
            </Button>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
