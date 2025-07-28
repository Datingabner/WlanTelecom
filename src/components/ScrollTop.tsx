import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // ¡Aquí añades el smooth scroll!
    });
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null; // No renderiza nada en el DOM
};

export default ScrollToTop;