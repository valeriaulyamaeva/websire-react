// data.js
import Google from '../assets/images/Goggle.png';
import Dribbble from '../assets/images/icon.png';
import Instagram from '../assets/images/Instagram.png';
import webDesignImage from '../assets/images/web_design.webp';
import uiUxImage from '../assets/images/ui_ux.jpg';
import mobileImage from '../assets/images/mobile.png';
import userResearchImage from '../assets/images/user_research.png';

export const SOCIAL_LINKS = [
    { href: "https://www.behance.net/", image: Google, alt: "Behance" },
    { href: "https://dribbble.com/", image: Dribbble, alt: "Dribbble" },
    { href: "https://www.instagram.com/", image: Instagram, alt: "Instagram" },
];

export const NAV_LINKS = [
    { to: "/", label: "Главная" },
    { to: "/about", label: "О себе" },
    { to: "/services", label: "Услуги" },
    { to: "/works", label: "Мои работы" },
    { to: "/contact", label: "Контакты" },
];

export const SERVICES = [
    {
      id: "webDesign",
      title: "Web ДИЗАЙН",
      description: "Разрабатываю стильные и функциональные веб-интерфейсы, создавая визуально привлекательные и удобные сайты.",
      image: webDesignImage,
    },
    {
      id: "uiUxDesign",
      title: "UI/UX ДИЗАЙН",
      description: "Проектирую интуитивно понятные интерфейсы, улучшая пользовательский опыт через исследования и тестирование.",
      image: uiUxImage,
    },
    {
      id: "mobileDevelopment",
      title: "МОБИЛЬНАЯ РАЗРАБОТКА",
      description: "Дизайню удобные и адаптивные мобильные интерфейсы, ориентируясь на особенности iOS и Android.",
      image: mobileImage,
    },
    {
      id: "userResearch",
      title: "ИССЛЕДОВАНИЕ ЮЗЕРОВ",
      description: "Анализирую поведение и потребности пользователей, чтобы создавать продукты, решающие их реальные задачи.",
      image: userResearchImage,
    },
];

export const COPYRIGHT_TEXT = "Copyright ©2025 Антон Павлов. Все права защищены.";
