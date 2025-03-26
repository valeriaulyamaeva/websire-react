import React, { useState, useEffect } from "react";
import {
  Container, Typography, Grid, Card, CardContent, CardMedia, Collapse, IconButton, Box, Link, ListItem, Drawer, List} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import webDesignImage from './assets/images/web_design.webp';
import uiUxImage from './assets/images/ui_ux.jpg';
import mobileImage from './assets/images/mobile.png';
import userResearchImage from './assets/images/user_research.png';

const ServicesComponent = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  const [expanded, setExpanded] = useState({
    webDesign: false,
    uiUxDesign: false,
    mobileDevelopment: false,
    userResearch: false,
  });
  const [services, setServices] = useState([
    { id: 'webDesign', title: 'Web ДИЗАЙН', description: 'Разрабатываю стильные и функциональные веб-интерфейсы, создавая визуально привлекательные и удобные сайты.', image: webDesignImage },
    { id: 'uiUxDesign', title: 'UI/UX ДИЗАЙН', description: 'Проектирую интуитивно понятные интерфейсы, улучшая пользовательский опыт через исследования и тестирование.', image: uiUxImage },
    { id: 'mobileDevelopment', title: 'МОБИЛЬНАЯ РАЗРАБОТКА', description: 'Дизайню удобные и адаптивные мобильные интерфейсы, ориентируясь на особенности iOS и Android.', image: mobileImage },
    { id: 'userResearch', title: 'ИССЛЕДОВАНИЕ ЮЗЕРОВ', description: 'Анализирую поведение и потребности пользователей, чтобы создавать продукты, решающие их реальные задачи.', image: userResearchImage }
  ]);

  useEffect(() => {
    restoreCardOrder();
  }, []);

  const handleExpandClick = (service) => {
    setExpanded((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handleDragStart = (e, serviceId) => {
    e.dataTransfer.setData('serviceId', serviceId);
  };

  const handleDrop = (e, serviceId) => {
    e.preventDefault();
    const draggedServiceId = e.dataTransfer.getData('serviceId');
    if (draggedServiceId !== serviceId) {
      const newServices = [...services];
      const draggedServiceIndex = newServices.findIndex(service => service.id === draggedServiceId);
      const droppedServiceIndex = newServices.findIndex(service => service.id === serviceId);

      const temp = newServices[draggedServiceIndex];
      newServices[draggedServiceIndex] = newServices[droppedServiceIndex];
      newServices[droppedServiceIndex] = temp;

      setServices(newServices);
      saveCardOrder(newServices);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const saveCardOrder = (newOrder) => {
    const serviceOrder = newOrder.map(service => service.id);
    localStorage.setItem("serviceOrder", JSON.stringify(serviceOrder));
  };

  const restoreCardOrder = () => {
    const savedOrder = JSON.parse(localStorage.getItem("serviceOrder"));
    if (savedOrder) {
      const orderedServices = savedOrder
        .map(id => services.find(service => service.id === id))
        .filter(service => service !== undefined);
  
      if (orderedServices.length > 0) {
        setServices(orderedServices);
      }
    }
  };
  

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
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
          <RouterLink to="/" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>Главная</RouterLink>
          <RouterLink to="/about" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>О себе</RouterLink>
          <RouterLink to="/services" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>Услуги</RouterLink>
          <RouterLink to="/works" style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '1rem' }}>Мои работы</RouterLink>
          <RouterLink to="/contact" style={{ display: 'block', color: '#fff', textDecoration: 'none' }}>Контакты</RouterLink>
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
          <ListItem><RouterLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>Главная</RouterLink></ListItem>
          <ListItem><RouterLink to="/about" style={{ color: '#fff', textDecoration: 'none' }}>О себе</RouterLink></ListItem>
          <ListItem><RouterLink to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Услуги</RouterLink></ListItem>
          <ListItem><RouterLink to="/works" style={{ color: '#fff', textDecoration: 'none' }}>Мои работы</RouterLink></ListItem>
          <ListItem><RouterLink to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Контакты</RouterLink></ListItem>
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
    <Container 
  sx={{ 
    marginLeft: { xs: '0', md: '20%' }, 
    marginTop: '2rem', 
    padding: { xs: '1rem', md: '0' } 
  }}
>
  <header style={{ marginBottom: "2rem", textAlign: 'center' }}>
    <Box sx={{ backgroundColor: '#fff', marginBottom: '1rem' }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontSize: { xs: '0.875rem', sm: '1rem' }, 
          marginBottom: '0.5rem', 
          fontStyle: 'italic', 
          fontWeight: 550 
        }}
      >
        Мои работы
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem' }, 
          fontWeight: 'bold' 
        }}
      >
        ПОСЛЕДНИЕ ПРОЕКТЫ
      </Typography>
    </Box>
  </header>
  <Grid container spacing={2}>
    {services.map((service) => (
      <Grid 
        item 
        xs={12} 
        sm={6} 
        key={service.id} 
        draggable 
        onDragStart={(e) => handleDragStart(e, service.id)} 
        onDrop={(e) => handleDrop(e, service.id)} 
        onDragOver={handleDragOver}
      >
        <Card sx={{ 
          padding: { xs: '0.5rem', sm: '1rem' }, 
          boxShadow: { xs: 'none', sm: '0px 4px 6px rgba(0, 0, 0, 0.1)' } 
        }}>
          <CardContent sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' } }}
            >
              {service.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              paragraph 
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              {service.description}
            </Typography>
            <IconButton 
              onClick={() => handleExpandClick(service.id)} 
              aria-expanded={expanded[service.id]}
              sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={expanded[service.id]}>
              <CardMedia
                component="img"
                alt={`Пример ${service.title}`}
                height="auto"
                sx={{ 
                  maxHeight: { xs: '150px', sm: '200px' }, 
                  objectFit: 'cover' 
                }}
                image={service.image}
              />
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
      </Container>
    </Box>
  );
};

export default ServicesComponent;
