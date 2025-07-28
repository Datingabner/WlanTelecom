import { useEffect, useRef } from "react";
import gsap from "gsap";

const CircuitAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null); // Referencia al SVG

  useEffect(() => {
    // Selecciona todos los elementos <path> dentro del SVG
    const paths = svgRef.current?.querySelectorAll("path");

    if (paths) {
      // Animación con GSAP
      gsap.to(paths, {
        strokeDashoffset: -1000,
        duration: 1.7,
        repeat: -1,
        stagger: 0.3,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 1000 100" className="w-full h-full">
      <defs>
        <linearGradient id="lightPulse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="cyan" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Varias líneas estilo circuito */}
      <path
        d="M 10 10 H 300 V 30 H 600 V 10 H 900 V 30 H 990"
        stroke="url(#lightPulse)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="200 800"
        strokeDashoffset="0"
      />

      <path
        d="M 10 40 H 250 V 60 H 550 V 40 H 850 V 60 H 990"
        stroke="url(#lightPulse)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="200 800"
        strokeDashoffset="0"
      />

      <path
        d="M 10 70 H 200 V 90 H 500 V 70 H 800 V 90 H 990"
        stroke="url(#lightPulse)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="200 800"
        strokeDashoffset="0"
      />
    </svg>
  );
};

export default CircuitAnimation;