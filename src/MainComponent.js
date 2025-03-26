import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Link, Box, Drawer, ListItem, List, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { LinkedIn, Phone, Email } from '@mui/icons-material';
import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import icon from './assets/images/north_east.png';
import main from './assets/images/main_img.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MainComponent = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '19%',
      marginTop: '0rem',
      [theme.breakpoints.down('md')]: {
        marginLeft: '0',
      },
    }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '19%', marginTop: '3.5rem', [theme.breakpoints.down('md')]: { marginLeft: '0' } }}>
      
    <IconButton
        sx={{
          position: 'fixed',
          top: 10,
          left: 10,
          color: '#000',
          display: { md: 'none' },
          zIndex: 1300
        }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '15%',
        backgroundColor: '#000',
        color: '#fff',
        padding: '2rem',
        [theme.breakpoints.down('md')]: { display: 'none' },
      }}>
        <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5rem' }}>Jac.</Typography>
        <Box sx={{ fontSize: '1.3rem', marginBottom: '3rem' }}>
          <RouterLink to="/websire-react/" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>Главная</RouterLink>
          <RouterLink to="/websire-react/about" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>О себе</RouterLink>
          <RouterLink to="/websire-react/services" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>Услуги</RouterLink>
          <RouterLink to="/websire-react/works" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>Мои работы</RouterLink>
          <RouterLink to="/websire-react/contact" style={{ display: 'block', color: '#fff', textDecoration: 'none' }}>Контакты</RouterLink>
        </Box>
        <Box sx={{ marginTop: '5rem' }}>
  <Link href="https://www.behance.net/" target="_blank" sx={{ display: 'block', marginBottom: 1 }}>
    <img src={Google} alt="Behance" style={{ width: '2rem' }} />
  </Link>
  <Link href="https://dribbble.com/" target="_blank" sx={{ display: 'block', marginBottom: 1 }}>
    <img src={Dribbble} alt="Dribbble" style={{ width: '2rem' }} />
  </Link>
  <Link href="https://www.instagram.com/" target="_blank" sx={{ display: 'block' }}>
    <img src={Instagram} alt="Instagram" style={{ width: '2rem' }} />
  </Link>
</Box>

<Box sx={{ marginTop: '6rem', textAlign: 'left', fontSize: '0.5rem', color: '#fff' }}>
  <Typography>Copyright ©2025 Антон Павлов. Все права защищены.</Typography>
</Box>
      </Box>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '70%',
            backgroundColor: '#000',
            color: '#fff',
            padding: '2rem'
          }
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: '#fff', position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Jac.</Typography>
        <List>
          <ListItem><RouterLink to="/websire-react/" style={{ color: '#fff', textDecoration: 'none' }}>Главная</RouterLink></ListItem>
          <ListItem><RouterLink to="/websire-react/about" style={{ color: '#fff', textDecoration: 'none' }}>О себе</RouterLink></ListItem>
          <ListItem><RouterLink to="/websire-react/services" style={{ color: '#fff', textDecoration: 'none' }}>Услуги</RouterLink></ListItem>
          <ListItem><RouterLink to="/websire-react/works" style={{ color: '#fff', textDecoration: 'none' }}>Мои работы</RouterLink></ListItem>
          <ListItem><RouterLink to="/websire-react/contact" style={{ color: '#fff', textDecoration: 'none' }}>Контакты</RouterLink></ListItem>
        </List>
        <Box sx={{ marginTop: '5rem' }}>
  <Link href="https://www.behance.net/" target="_blank" sx={{ display: 'block', marginBottom: 1 }}>
    <img src={Google} alt="Behance" style={{ width: '2rem' }} />
  </Link>
  <Link href="https://dribbble.com/" target="_blank" sx={{ display: 'block', marginBottom: 1 }}>
    <img src={Dribbble} alt="Dribbble" style={{ width: '2rem' }} />
  </Link>
  <Link href="https://www.instagram.com/" target="_blank" sx={{ display: 'block' }}>
    <img src={Instagram} alt="Instagram" style={{ width: '2rem' }} />
  </Link>
</Box>

<Box sx={{ marginTop: '6rem', textAlign: 'left', fontSize: '0.5rem', color: '#fff' }}>
  <Typography>Copyright ©2025 Антон Павлов. Все права защищены.</Typography>
</Box>
      </Drawer>
    </Box>

    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', marginLeft: '0' }}>
  <Grid container spacing={4} alignItems="center" justifyContent="center" flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}>
    <Grid item xs={12} sm={12} md={6} sx={{ textAlign: 'center', maxWidth: { xs: '100%', md: '45%' } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '1.6rem', sm: '1.8rem', md: '5rem' },
          fontWeight: 'bolder',
          marginBottom: { xs: '1.5rem', sm: '2rem', md: '4rem' },
        }}
      >
        Я АНТОН ПАВЛОВ...
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          fontWeight: 'bold',
          marginBottom: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        }}
      >
        Web-дизайнер из Минска
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://www.linkedin.com/"
        target="_blank"
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          padding: { xs: '0.7rem 1.8rem', sm: '0.8rem 2rem', md: '1rem 2.5rem' },
          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: { xs: '1.5rem', sm: '2rem', md: '4rem' },
          transition: 'background-color 0.3s, transform 0.3s',
          '&:hover': { backgroundColor: '#444', transform: 'scale(1.05)' },
        }}
      >
        Давай общаться
        <img src={icon} alt="Иконка стрелки" style={{ width: '1rem', marginLeft: '0.5rem' }} />
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Phone sx={{ width: '1.2rem', marginRight: '0.5rem' }} />
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.15rem' }, fontWeight: 'bold', fontStyle: 'italic' }}>
            +375 33 444 05 05
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Email sx={{ width: '1.2rem', marginRight: '0.5rem' }} />
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.15rem' }, fontWeight: 'bold', fontStyle: 'italic' }}>
            anton360@gmail.com
          </Typography>
        </Box>
      </Box>
    </Grid>

    <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={main}
        alt="Антон Павлов - Веб-дизайнер"
        style={{
          width: '90%',
          objectFit: 'cover',
        }}
      />
    </Grid>
  </Grid>
</Box>

    </Box>
  );
};

export default MainComponent;