import { useEffect } from "react";
import "./RainAnimation.css"; // Importa el archivo CSS

const RainAnimation = () => {
  // Efecto para crear partículas dinámicamente
  useEffect(() => {
    const rainContainer = document.querySelector(".rain");

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add(
        "particle",
        "absolute",
        "w-0.5",
        "h-5",
        "bg-blue-400",
        "opacity-50"
      );
      particle.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
      particle.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria
      rainContainer?.appendChild(particle);

      // Eliminar la partícula después de 3 segundos
      setTimeout(() => {
        particle.remove();
      }, 3000);
    };

    // Crear partículas cada 50ms
    const interval = setInterval(createParticle, 50);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rain relative w-full h-screen bg-black overflow-hidden">
      {/* Las partículas se generan dinámicamente aquí */}
    </div>
  );
};

export default RainAnimation;