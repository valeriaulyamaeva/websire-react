import { useState, useEffect, useCallback } from "react";

export const useServiceOrder = (initialServices) => {
  const [services, setServices] = useState(initialServices);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("serviceOrder") || "[]");
    if (savedOrder.length) {
      const orderedServices = savedOrder
        .map((id) => initialServices.find((s) => s.id === id))
        .filter((s) => s !== undefined);
      setServices(orderedServices);
    }
  }, [initialServices]);

  const saveOrder = useCallback((newOrder) => {
    localStorage.setItem("serviceOrder", JSON.stringify(newOrder.map((s) => s.id)));
    setServices(newOrder);
  }, []);

  return { services, saveOrder };
};
