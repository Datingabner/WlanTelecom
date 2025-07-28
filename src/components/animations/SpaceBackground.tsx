import React, { useEffect, useRef } from 'react';

interface SpaceBackgroundProps {
  height?: string;
  className?: string;
  starDensity?: number; // 1-100
  starSize?: number; // 0.1-2
  animationSpeed?: number; // 0.1-2
  lineOpacity?: number; // 0-1
  avoidHeader?: boolean;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  height = "h-[500px]",
  className = "",
  starDensity = 18,
  starSize = 1.5,
  animationSpeed = 1,
  lineOpacity = 2,
  avoidHeader = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar tamaño del canvas
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      if (avoidHeader) {
        const header = document.querySelector('header');
        if (header) {
          const headerHeight = header.clientHeight;
          container.style.marginTop = `${headerHeight}px`;
          container.style.height = `calc(${height} - ${headerHeight}px)`;
        }
      }
    };

    updateCanvasSize();

    interface Star {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }

    const stars: Star[] = [];
    const FPS = 60;
    const starCount = Math.floor((starDensity * canvas.width * canvas.height) / 100000);

    // Crear estrellas
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: (Math.random() * starSize * 0.8) + (starSize * 0.5),
        vx: (Math.floor(Math.random() * 30) - 15) * animationSpeed,
        vy: (Math.floor(Math.random() * 30) - 15) * animationSpeed
      });
    }

    const distance = (point1: {x: number, y: number}, point2: {x: number, y: number}) => {
      const xs = point2.x - point1.x;
      const ys = point2.y - point1.y;
      return Math.sqrt(xs * xs + ys * ys);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Dibujar estrellas
      stars.forEach(star => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Dibujar conexiones
      ctx.beginPath();
      stars.forEach(starI => {
        stars.forEach(starII => {
          if (distance(starI, starII) < canvas.width * 0.2) {
            ctx.moveTo(starI.x, starI.y);
            ctx.lineTo(starII.x, starII.y);
          }
        });
      });
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
      ctx.stroke();
    };

    const update = () => {
      stars.forEach(star => {
        star.x += star.vx / FPS;
        star.y += star.vy / FPS;
        
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
      });
    };

    let animationId: number;
    const tick = () => {
      draw();
      update();
      animationId = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    tick();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starDensity, starSize, animationSpeed, lineOpacity, avoidHeader, height]);

  return (
    <div 
      ref={containerRef}
      className={`relative bg-black -z-10 overflow-hidden ${height} ${className}`}
      style={avoidHeader ? { top: 0 } : {}}
    >
      {/* Capa de fondo animado */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0))
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '100px 100px',
              animation: `zoom ${8 / animationSpeed}s infinite`,
              opacity: 0,
              animationDelay: `${i * 2 / animationSpeed}s`,
              backgroundPosition: i === 0 ? '30% 20%' : 
                                i === 1 ? '60% 80%' : '10% 50%'
            }}
          />
        ))}
        
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      <style>{`
        @keyframes zoom {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;