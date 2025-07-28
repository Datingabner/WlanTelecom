import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CircuitoBackground.css"
const CircuitBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configuración inicial
    const totalLines = 50;
    const container = containerRef.current;

    // Crear líneas dinámicamente
    for (let i = 0; i < totalLines; i++) {
      const line = document.createElement("div");
      line.className = "circuit-line";
      container.appendChild(line);
    }

    const lines = container.querySelectorAll(".circuit-line");

    // Animación con GSAP
    lines.forEach((line) => {
      gsap.set(line, {
        x: -50,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(line, {
        duration: Math.random() * 3 + 0.5,
        x: window.innerWidth,
        repeat: -1,
        ease: "power1.inOut",
        delay: Math.random() * 2,
      });
    });

    // Limpieza al desmontar el componente
    return () => {
      lines.forEach((line) => {
        gsap.killTweensOf(line);
      });
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed -z-10 inset-0 overflow-hidden z-0 pointer-events-none"
      style={{
        background: "#000",
      }}
    />
  );
};

export default CircuitBackground;