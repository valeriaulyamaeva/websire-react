import React, { useState, useCallback } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ServiceCard from "../components/ServiceCard";
import Sidebar from "../components/Sidebar";
import { useServiceOrder } from "../hooks/useServiceOrder";
import { SERVICES, SOCIAL_LINKS } from "../constants/data";

const ServicesComponent = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { services, saveOrder } = useServiceOrder(SERVICES);

  const toggleDrawer = useCallback(() => setMobileOpen((prev) => !prev), []);

  const handleDrag = useCallback((e, serviceId) => e.dataTransfer.setData("serviceId", serviceId), []);

  const handleDrop = useCallback(
    (e, serviceId) => {
      e.preventDefault();
      const draggedServiceId = e.dataTransfer.getData("serviceId");
      if (draggedServiceId !== serviceId) {
        const newServices = [...services];
        const draggedIndex = newServices.findIndex((s) => s.id === draggedServiceId);
        const droppedIndex = newServices.findIndex((s) => s.id === serviceId);
        [newServices[draggedIndex], newServices[droppedIndex]] = [newServices[droppedIndex], newServices[draggedIndex]];
        saveOrder(newServices);
      }
    },
    [services, saveOrder]
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} socialLinks={SOCIAL_LINKS} />
      <Container sx={{ marginLeft: { xs: "0", md: "20%" } }}>
      <Box sx={{ backgroundColor: '#fff', marginTop: '3rem', marginBottom: '1rem', textAlign: 'flex-start' }}>
    <Typography 
      variant="h6" 
      sx={{ 
        fontSize: { xs: '0.875rem', sm: '1rem' }, 
        marginBottom: '0.5rem', 
        fontStyle: 'italic', 
        fontWeight: 550 
      }}
    >
      Услуги
    </Typography>
    <Typography 
      variant="h2" 
      sx={{ 
        fontSize: { xs: '1.5rem', sm: '2rem' }, 
        fontWeight: 'bold' 
      }}
    >
      МОИ НАПРАВЛЕНИЯ
    </Typography>
  </Box>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} key={service.id}>
              <ServiceCard service={service} onDragStart={handleDrag} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesComponent;
