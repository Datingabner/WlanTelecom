import { useEffect, useState } from "react";
import "./AnimatedBackground.css";

type LineConfig = {
  id: number;
  top: string;
  duration: string;
  color: string;
  className?: string;
};

type AnimatedBackgroundProps = {
  lineCount?: number;
  baseSpeed?: number;
  lineColors?: string[];
  opacity?: number;
  className?: string;
};

const AnimatedBackground = ({
  lineCount = 50,
  baseSpeed = 5,
  lineColors = ["via-zinc-800", "via-gray-50", "via-red-600"],
  opacity = 0.3,
}: AnimatedBackgroundProps) => {
  const [lines, setLines] = useState<LineConfig[]>([]);

  useEffect(() => {
    // Generar líneas iniciales
    const initialLines = Array.from({ length: lineCount }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * baseSpeed + 1}s`,
      color: lineColors[Math.floor(Math.random() * lineColors.length)],
    }));
    setLines(initialLines);

    // Rotación de líneas para animación continua
    const interval = setInterval(() => {
      setLines((prevLines) => {
        const remainingLines = prevLines.slice(1);
        const newLine = {
          id: Date.now(),
          top: `${Math.random() * 100}%`,
          duration: `${Math.random() * baseSpeed + 1}s`,
          color: lineColors[Math.floor(Math.random() * lineColors.length)],
        };
        return [...remainingLines, newLine];
      });
    }, 300);

    return () => clearInterval(interval);
  }, [lineCount, baseSpeed, lineColors]);

  return (
    <div className="mt-30 animated-background inset-0 w-full h-full overflow-hidden z-10"
      style={{ opacity }}
    >
      {lines.map((line) => (
        <div
          key={line.id}
          className={`line absolute w-full h-1 bg-gradient-to-r from-transparent ${line.color} to-transparent`}
          style={{
            top: line.top,
            animationDuration: line.duration,
            transform: "translateX(-100%)",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;