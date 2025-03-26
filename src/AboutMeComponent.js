import React, { useState } from 'react';
import { Box, Grid, Typography, Button, List, ListItem, ListItemText, IconButton, Link, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import ImgHome from './assets/images/img_home.png';
import IconPhone from './assets/images/Icon_phone.png';
import IconAge from './assets/images/icon_age.png';
import IconMail from './assets/images/Icon_mail.png';
import IconPlace from './assets/images/icon_place.png';
import QuoteIcon from './assets/images/ri_double-quotes-r.png';
import NorthEastHome from './assets/images/north_east_home.png';
import NorthEast from './assets/images/north_east.png';

const AboutMeComponent = () => {
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

<main className="main-content">
  <Box sx={{ backgroundColor: '#fff', marginBottom: '1rem', marginLeft: '3rem', padding: '0rem' }}>
    <Typography variant="h6" sx={{ fontSize: '1rem', marginBottom: '0.75rem', fontStyle: 'italic', fontWeight: 550 }}>
      Рад тебя видеть!
    </Typography>
    <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
      ДОБРО ПОЖАЛОВАТЬ
    </Typography>
  </Box>

<Box>
  <Grid container spacing={3} justifyContent="center" alignItems="center" direction={{ xs: "column", md: "row" }} >
    
  <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <section className="hero-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={ImgHome} alt="Портрет Антона Павлова" style={{ maxWidth: '20rem', padding: '0.5rem' }} />
    </div>
    <div className="hero-content" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff7e5f' }}>
        Антон Павлов
      </Typography>
      <Typography variant="body1" className="subtitle" sx={{ fontSize: '1.2rem', margin: '0', color: '#333' }}>
        <strong>Web-дизайнер</strong> из <strong>Минска</strong>
      </Typography>
      <Button
        variant="outlined"
        href="https://www.linkedin.com/"
        target="_blank"
        download
        endIcon={<img src={NorthEastHome} alt="Стрелка" className="icon-north-east" />}
        sx={{
          marginTop: '1rem',
          fontWeight: 300,
          color: '#000',
          borderColor: '#000',
          '&:hover': {
            borderColor: '#ff7e5f',
            backgroundColor: '#ff7e5f',
            color: '#fff',
          },
        }}
      >
        Скачать CV
      </Button>
    </div>
  </section>
</Grid>
    
<Grid item xs={12} md={6}>
  <section 
    className="info-container"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginBottom: '2rem',
      marginLeft: '2rem',
      marginTop: '1rem',
      marginRight: '1rem',
    }}
  >
    <div 
      className="contacts"
      style={{
        display: 'grid',
        maxHeight: '6rem',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        flex: 2,
        marginBottom: '4rem'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <List>
            <ListItem className="contact-item" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={IconPhone} alt="Иконка телефона" className="icon-info" style={{ width: '40%', height: 'auto', marginRight: '1rem' }} />
              <p style={{width: '25rem', fontSize: '0.9rem', margin: 0, color: '#000', fontWeight: 'bold', fontStyle: 'italic' }}>+375 33 444 05 05</p>
            </ListItem>
            <ListItem className="contact-item" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={IconAge} alt="Иконка возраста" className="icon-info" style={{ width: '40%', height: 'auto', marginRight: '1rem' }} />
              <p style={{width: '23rem', fontSize: '0.9rem', margin: 0, color: '#000', fontWeight: 'bold', fontStyle: 'italic' }}>29 лет</p>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List>
            <ListItem className="contact-item" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={IconMail} alt="Иконка почты" className="icon-info" style={{ width: '40%', height: 'auto', marginRight: '1rem' }} />
              <p style={{width: '23rem', fontSize: '0.9rem', margin: 0, color: '#000', fontWeight: 'bold', fontStyle: 'italic' }}>anton360@gmail.com</p>
            </ListItem>
            <ListItem className="contact-item" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={IconPlace} alt="Иконка местоположения" className="icon-info" style={{ width: '40%', height: 'auto', marginRight: '1rem' }} />
              <p style={{width: '23rem', fontSize: '0.9rem', margin: 0, color: '#000', fontWeight: 'bold', fontStyle: 'italic' }}>Минск, Беларусь</p>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
    <div 
      className="info"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '3rem',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="info-item" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="info-age" style={{ display: 'flex', alignItems: 'center'}}>
              <h2 style={{width: '20rem', fontSize: '3rem', fontWeight: 'bold', color: '#FF7E5F', margin: 0 }}>10+</h2>
              <span style={{ fontSize: '1.25rem', fontWeight: 'normal', color: '#000', marginLeft: '0.5rem' }}>Лет опыта...</span>
            </div>
            <p style={{ fontSize: '1rem', Width: '30rem', lineHeight: '1.5', color: '#000' }}>
              Привет! Я <span style={{ color: '#FF7E5F', fontWeight: 'bold' }}>Антон Павлов</span>. Я веб-дизайнер и разработчик, который увлечен своей работой и предан ей.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="info-item" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="info-age" style={{ display: 'flex', alignItems: 'center'}}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF7E5F', margin: 0 }}>14</h2>
              <span style={{ fontSize: '1.25rem', fontWeight: 'normal', color: '#000', marginLeft: '0.5rem' }}>Клиентов по всему миру...</span>
            </div>
            <p style={{ fontSize: '1rem', Width: '30rem', lineHeight: '1.5', color: '#000' }}>
              Имея более 10 лет опыта работы графическим дизайнером, я приобрел навыки, которые помогут улучшить ваш проект.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>

    <div 
      className="testimonial"
      style={{
        flex: 1,
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '0rem'
      }}
    >
      <blockquote 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          maxWidth: '100%',
          fontSize: '1rem',
          lineHeight: '1.8',
          color: '#fff',
          margin: '0 auto',
          padding: '1rem'
        }}
      >
        <img src={QuoteIcon} alt="Иконка кавычек" className="icon" style={{ width: '3.5rem', height: 'auto', opacity: 1, flexShrink: 0 }} />
        <span>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin."
        </span>
      </blockquote>
    </div>
  </section>
</Grid>


  </Grid>
</Box>
<footer
  className="footer"
  style={{
    background: 'linear-gradient(90deg, #b065e8, #fa8e38)',
    padding: '3rem',
    color: '#fff',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    boxSizing: 'border-box',
    marginTop: 'auto',
  }}
>
  <section className="experience">
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <div
          className="experience-left"
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Typography
            variant="h6"
            className="title"
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '2rem',
            }}
          >
            Мой опыт
          </Typography>
          <p
            className="description"
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '23rem',
            }}
          >
            Привет! Я Антон Павлов, веб-дизайнер и разработчик с более чем 10 летним опытом.
          </p>
          <Button
            variant="contained"
            href="https://www.linkedin.com/"
            target="_blank"
            download
            endIcon={<img src={NorthEast} alt="Иконка стрелки" className="icon" />}
            className="btn"
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '1rem 1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              marginTop: '2rem',
              cursor: 'pointer',
              maxWidth: 'fit-content',
            }}
          >
            Скачать резюме
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <List
          className="experience-list"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '1.5rem 0',
          }}
        >
<ListItem
  className="experience-info"
  style={{
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }}
>
  <div
    className="line-one"
    style={{
      display: 'flex',
      width: '100%',
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontStyle: 'italic',
    }}
  >
    <Typography component="span" className="time" style={{ fontSize: '1rem' }}>
      2018 - Present
    </Typography>
    <span style={{ flexGrow: 1 }}></span>
    <Typography component="span" className="company" style={{ fontSize: '1rem' }}>
      EPAM
    </Typography>
  </div>
  <Typography
    className="line-two"
    style={{
      textAlign: 'left',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#fff',
      marginTop: '0.5rem',
    }}
  >
    LEAD UI/UX DESIGNER
  </Typography>
</ListItem>
<ListItem
  className="experience-info"
  style={{
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }}
>
  <div
    className="line-one"
    style={{
      display: 'flex',
      width: '100%',
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontStyle: 'italic',
    }}
  >
    <Typography component="span" className="time" style={{ fontSize: '1rem' }}>
      2010-2018
    </Typography>
    <span style={{ flexGrow: 1 }}></span> 
    <Typography component="span" className="company" style={{ fontSize: '1rem' }}>
      IBA Group
    </Typography>
  </div>

  <Typography
    className="line-two"
    style={{
      textAlign: 'left',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#fff',
      marginTop: '0.5rem',
    }}
  >
    SENIOR UI/UX DESIGNER
  </Typography>
</ListItem>
<ListItem
  className="experience-info"
  style={{
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }}
>
  <div
    className="line-one"
    style={{
      display: 'flex',
      width: '100%', 
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, 0.7)',
      fontStyle: 'italic',
    }}
  >
    <Typography component="span" className="time" style={{ fontSize: '1rem' }}>
      2008-2010
    </Typography>
    <span style={{ flexGrow: 1 }}></span> 
    <Typography component="span" className="company" style={{ fontSize: '1rem' }}>
      ISSoft
    </Typography>
  </div>
  <Typography
    className="line-two"
    style={{
      textAlign: 'left',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#fff',
      marginTop: '0.5rem',
    }}
  >
    JUNIOR UI/UX DESIGNER
  </Typography>
</ListItem>

        </List>
      </Grid>
    </Grid>
  </section>
</footer>


      </main>
    </Box>
  );
};

export default AboutMeComponent;
