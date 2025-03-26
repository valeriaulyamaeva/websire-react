import React, { useState } from 'react';
import { Container, Grid, Typography, Box, IconButton, Drawer, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MainComponent from './MainComponent';
import AboutMeComponent from './AboutMeComponent';
import ServicesComponent from './ServicesComponent';
import WorksComponent from './WorksComponent';
import ContactsComponent from './ContactsComponent';
import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';

const App = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        [theme.breakpoints.down('md')]: {
          marginLeft: '0',
        },
      }}>
        <IconButton
          sx={{
            position: 'fixed',
            top: 10,
            left: 10,
            color: '#fff',
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
          [theme.breakpoints.down('md')]: {
            display: 'none', 
          },
        }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5rem' }}>Jac.</Typography>
          <Box sx={{ marginBottom: '3rem' }}>
            <RouterLink to="/" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Главная</RouterLink>
            <RouterLink to="/about" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>О себе</RouterLink>
            <RouterLink to="/services" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Услуги</RouterLink>
            <RouterLink to="/works" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Мои работы</RouterLink>
            <RouterLink to="/contact" style={{ display: 'block', color: '#fff', textDecoration: 'none', fontSize: '1.3rem' }}>Контакты</RouterLink>
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
          <Box sx={{ marginBottom: '3rem' }}>
            <RouterLink to="/" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Главная</RouterLink>
            <RouterLink to="/about" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>О себе</RouterLink>
            <RouterLink to="/services" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Услуги</RouterLink>
            <RouterLink to="/works" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Мои работы</RouterLink>
            <RouterLink to="/contact" style={{ display: 'block', color: '#fff', textDecoration: 'none', fontSize: '1.3rem' }}>Контакты</RouterLink>
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
        </Drawer>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', marginLeft: '0' }}>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/about" element={<AboutMeComponent />} />
            <Route path="/services" element={<ServicesComponent />} />
            <Route path="/works" element={<WorksComponent />} />
            <Route path="/contact" element={<ContactsComponent />} />
          </Routes>
        </Box>
        <Box sx={{ marginTop: '6rem', textAlign: 'left', fontSize: '0.5rem', color: '#fff' }}>
  <Typography>Copyright ©2025 Антон Павлов. Все права защищены.</Typography>
</Box>
      </Box>
    </Router>
  );
};

export default App;
