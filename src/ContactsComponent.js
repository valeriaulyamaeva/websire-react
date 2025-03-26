import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography, Link, Container, Drawer, ListItem, IconButton, List } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Google from './assets/images/Goggle.png';
import Dribbble from './assets/images/icon.png';
import Instagram from './assets/images/Instagram.png';
import backgroundImage from './assets/images/contact_form_background.png';

const ContactsComponent = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  const [tab, setTab] = useState(() => parseInt(localStorage.getItem("activeTab")) || 0);

  useEffect(() => {
    localStorage.setItem("activeTab", tab);
  }, [tab]);

  const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);

    const validate = () => {
      let newErrors = {};

      const namePattern = /[a-zA-Zа-яА-Я]/; 
      if (!formData.name.trim()) {
          newErrors.name = "Имя обязательно";
      } else if (formData.name.trim().length < 2) {
          newErrors.name = "Имя должно содержать хотя бы 2 символа";
      } else if (!namePattern.test(formData.name)) {
          newErrors.name = "Имя должно содержать хотя бы одну букву (А-Я, A-Z)";
      }

      const email = formData.email.trim();
      const emailErrors = [];

      if (!email) {
        newErrors.email = "Email не может быть пустым.";
      } else {
        if (!email.includes('@')) {
          emailErrors.push("Email должен содержать символ '@'.");
        }
        const parts = email.split('@');
        if (parts.length === 2 && (!parts[0].trim() || parts[0].includes(' '))) {
          emailErrors.push("Часть перед '@' не должна быть пустой или содержать пробелы.");
        }
        const domainPattern = /\.[a-zA-Z]{2,}$/;
        if (!domainPattern.test(email)) {
          emailErrors.push("Email должен содержать домен (например, example@mail.com).");
        }
        if (emailErrors.length > 0) {
          newErrors.email = emailErrors.join("\n");
        }
      }

      const password = formData.password;
      const passwordErrors = [];

      if (!password) {
        newErrors.password = "Пароль не может быть пустым.";
      } else {
        if (password.length < 6) {
          passwordErrors.push("Пароль должен содержать минимум 6 символов.");
        }
        if (password.length > 30) {
          passwordErrors.push("Пароль не должен превышать 30 символов.");
        }
        if (!/[A-Z]/.test(password)) {
          passwordErrors.push("Пароль должен содержать хотя бы одну заглавную букву (A-Z).");
        }
        if (!/[a-z]/.test(password)) {
          passwordErrors.push("Пароль должен содержать хотя бы одну строчную букву (a-z).");
        }
        if (!/\d/.test(password)) {
          passwordErrors.push("Пароль должен содержать хотя бы одну цифру (0-9).");
        }
        if (!/[@$!%*?&]/.test(password)) {
          passwordErrors.push("Пароль должен содержать хотя бы один специальный символ (@$!%*?&).");
        }
        if (passwordErrors.length > 0) {
          newErrors.password = passwordErrors.join("\n");
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (isBlocked) {
        setErrors({ form: "Слишком много попыток. Попробуйте позже." });
        return;
      }
    
      if (validate()) {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUsers.some(user => user.email.toLowerCase() === formData.email.toLowerCase());

        if (userExists) {
          setErrors({ email: "Этот email уже зарегистрирован" });
          setAttempts(prev => prev + 1);
          
          if (attempts + 1 >= 3) {
            setIsBlocked(true);
            setTimeout(() => {
              setIsBlocked(false);
              setAttempts(0);
            }, 10000); 
          }
          return;
        }

        const newUser = { ...formData };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        setSuccessMessage("Регистрация успешна!");
        setFormData({ name: "", email: "", password: "" });
        setErrors({});
        setAttempts(0);

        setTimeout(() => setSuccessMessage(""), 1000);
      }
    };
    return (
<Box
  sx={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    padding: { xs: '1.5rem', sm: '2rem' },
    margin: '1rem auto',
    color: '#fff',
  }}
>
{successMessage && (
    <Typography variant="body1" sx={{ marginBottom: '1rem', color: '#fff', textAlign: 'center' }}>
      {successMessage}
    </Typography>
  )}
  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
    <Typography 
      variant="h6" 
      sx={{ 
        fontSize: { xs: '0.9rem', sm: '1rem' }, 
        marginBottom: '1rem', 
        textAlign: 'center', 
        color: '#fff' 
      }}
    >
      Регистрация
    </Typography>
    <TextField
      label="Имя"
      variant="outlined"
      fullWidth
      name="name"
      value={formData.name}
      onChange={handleChange}
      error={!!errors.name}
      helperText={errors.name}
      InputLabelProps={{ style: { color: '#fff' } }}
      sx={{ 
        background: 'transparent', 
        input: { color: '#fff' }, 
        marginBottom: '1rem',
      }}
      inputProps={{ maxLength: 50 }} 
    />
        <TextField
      label="Email"
      variant="outlined"
      fullWidth
      name="email"
      value={formData.email}
      onChange={handleChange}
      error={!!errors.email}
      helperText={errors.email}
      InputLabelProps={{ style: { color: '#fff' } }}
      sx={{ 
        background: 'transparent', 
        input: { color: '#fff' }, 
        marginBottom: '1rem',
      }}
      inputProps={{ maxLength: 50 }} 
    />
    <TextField
      label="Пароль"
      variant="outlined"
      fullWidth
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      error={!!errors.password}
      helperText={errors.password}
      InputLabelProps={{ style: { color: '#fff' } }}
      sx={{ 
        background: 'transparent', 
        input: { color: '#fff' }, 
        marginBottom: '1rem',
      }}
      inputProps={{ maxLength: 20 }} 
    />
    <Button
      type="submit"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '0.5rem 1rem',
        fontSize: { xs: '0.9rem', sm: '1rem' },
        width: '100%',
        '&:hover': { backgroundColor: '#ddd', transform: 'scale(1.05)' },
      }}
      inputProps={{ maxLength: 20 }} 
    >
      Зарегистрироваться
    </Button>
  </form>
</Box>
    );
  };

  const ContactSection = () => (
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    padding: { xs: 2, sm: 3 },
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }}
>
<Box sx={{ width: '100%', maxWidth: '600px', marginTop: '3rem' }}>
    <Typography 
      variant="h4" 
      component="h2" 
      gutterBottom 
      sx={{ 
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
        fontWeight: 'bold', 
        marginBottom: '1.5rem' 
      }}
    >
      СВЯЖИСЬ СО МНОЙ
    </Typography>
    <Typography 
      variant="body1" 
      paragraph 
      sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
    > 
      проспект Независимости, 58, оф.405
    </Typography>
    <Typography 
      variant="h5" 
      paragraph 
      sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 'bold' }}
    >
      +375 33 444 05 05
    </Typography>
    <Typography 
      variant="body1" 
      paragraph 
      sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 'bold' }}
    >
      anton360@gmail.com
    </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Link href="https://facebook.com" target="_blank" sx={{ marginRight: 2, color: 'black', fontSize: '1.25rem' }}>
            FACEBOOK
          </Link>
          <Link href="https://twitter.com" target="_blank" sx={{ marginRight: 2, color: 'black', fontSize: '1.25rem' }}>
            TWITTER
          </Link>
          <Link href="https://instagram.com" target="_blank" sx={{ marginRight: 2, color: 'black', fontSize: '1.25rem' }}>
            INSTAGRAM
          </Link>
        </Box>
      </Box>
    </Box>
  );
  
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

      <Container sx={{ marginLeft: "19%", marginTop: '2rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: tab === 0 ? '#FFA500' : 'black',
              borderColor: tab === 0 ? '#FFA500' : 'black',
              marginRight: 2,
            }}
            onClick={() => setTab(0)}
          >
            Контакты
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: tab === 1 ? '#FFA500' : 'black',
              borderColor: tab === 1 ? '#FFA500' : 'black',
            }}
            onClick={() => setTab(1)}
          >
            Регистрация
          </Button>
        </Box>
        {tab === 0 ? <ContactSection /> : <RegistrationForm />}
      </Container>
    </Box>
  );
};

export default ContactsComponent;
