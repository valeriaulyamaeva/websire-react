import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const ServiceCard = ({ service, onDragStart, onDrop, onDragOver }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      draggable
      onDragStart={(e) => onDragStart(e, service.id)}
      onDrop={(e) => onDrop(e, service.id)}
      onDragOver={onDragOver}
      sx={{ padding: { xs: "0.5rem", sm: "1rem" }, boxShadow: { xs: "none", sm: "0px 4px 6px rgba(0, 0, 0, 0.1)" } }}
    >
      <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem" } }}>
          {service.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          {service.description}
        </Typography>
        <IconButton onClick={() => setExpanded(!expanded)} aria-expanded={expanded} sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded}>
          <CardMedia component="img" alt={`Пример ${service.title}`} height="auto" sx={{ maxHeight: { xs: "150px", sm: "200px" }, objectFit: "cover" }} image={service.image} />
        </Collapse>
      </CardContent>
    </Card>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
};

export default React.memo(ServiceCard);
