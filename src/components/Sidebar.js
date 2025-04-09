import React from "react";
import { Box, Typography, Link, IconButton, Drawer, List, ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { COPYRIGHT_TEXT } from "../constants/data";

const Sidebar = ({ mobileOpen, toggleDrawer, socialLinks }) => (
  <>
    <IconButton sx={{ position: "fixed", top: 10, left: 10, color: "#000", display: { md: "none" }, zIndex: 1300 }} onClick={toggleDrawer}>
      <MenuIcon />
    </IconButton>

    <Drawer
      anchor="left"
      open={mobileOpen}
      onClose={toggleDrawer}
      sx={{ "& .MuiDrawer-paper": { width: "70%", backgroundColor: "#000", color: "#fff", padding: "2rem" } }}
    >
      <IconButton onClick={toggleDrawer} sx={{ color: "#fff", position: "absolute", top: 10, right: 10 }}>
        <CloseIcon />
      </IconButton>
      <Typography sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "3rem" }}>Jac.</Typography>
      <List>
        {["Главная", "О себе", "Услуги", "Мои работы", "Контакты"].map((text, index) => (
          <ListItem key={index}>
            <RouterLink to={`/${text.toLowerCase()}`} style={{ color: "#fff", textDecoration: "none" }}>
              {text}
            </RouterLink>
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: "5rem" }}>
        {socialLinks.map(({ href, src, alt }) => (
          <Link key={alt} href={href} target="_blank" sx={{ display: "block", marginBottom: 1 }}>
            <img src={src} alt={alt} style={{ width: "2rem" }} />
          </Link>
        ))}
      </Box>
      <Box sx={{ marginTop: "auto", paddingTop: "2rem" }}>
        <Typography variant="body2" color="white" align="center">
          {COPYRIGHT_TEXT}
        </Typography>
      </Box>
    </Drawer>
  </>
);

Sidebar.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  socialLinks: PropTypes.array.isRequired,
};

export default Sidebar;
