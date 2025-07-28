import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const CUBE_COLORS = [
  "#a78bfa", // purple
  "#6366f1", // blue
  "#818cf8", // indigo
  "#7c3aed", // violet
  "#312e81", // deep blue
];

// Staggered grid positions (vw, vh)
const CUBE_POSITIONS = [
  { x: 18, y: 22 },
  { x: 32, y: 16 },
  { x: 48, y: 24 },
  { x: 65, y: 18 },
  { x: 80, y: 28 },
  { x: 22, y: 45 },
  { x: 38, y: 38 },
  { x: 55, y: 44 },
  { x: 72, y: 40 },
  { x: 15, y: 68 },
  { x: 30, y: 60 },
  { x: 48, y: 70 },
  { x: 65, y: 62 },
  { x: 80, y: 75 },
  { x: 25, y: 85 },
  { x: 60, y: 85 },
];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const GlowingCubesBackground: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const lastTouch = useRef<{ x: number; y: number } | null>(null);

  // Generate cubes with staggered grid positions
  const cubes = React.useMemo(() => {
    return CUBE_POSITIONS.map((pos, i) => ({
      x: pos.x,
      y: pos.y,
      size: randomBetween(120, 200),
      rotate: randomBetween(-18, 18),
      color: CUBE_COLORS[i % CUBE_COLORS.length],
    }));
  }, []);

  // Mouse and touch event listeners (always active)
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMouse({ x: touch.clientX, y: touch.clientY });
        lastTouch.current = { x: touch.clientX, y: touch.clientY };
      }
    };
    const handleTouchEnd = () => {
      lastTouch.current = null;
    };
    const handleScroll = () => {
      if (!lastTouch.current) {
        setMouse({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        });
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Find the closest cube to the "cursor"
  useEffect(() => {
    let minDist = Infinity;
    let minIdx = null;
    cubes.forEach((cube, i) => {
      const cx = (cube.x / 100) * window.innerWidth;
      const cy = (cube.y / 100) * window.innerHeight;
      const dist = Math.hypot(cx - mouse.x, cy - mouse.y);
      if (dist < cube.size * 0.7 && dist < minDist) {
        minDist = dist;
        minIdx = i;
      }
    });
    setHovered(minIdx);
  }, [mouse, cubes]);

  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full bg-black overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {/* Gradient overlays for depth */}
      <div className="absolute left-1/4 top-1/5 w-[40vw] h-[40vw] bg-gradient-radial from-[#6366f1]/30 via-[#a78bfa]/10 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute right-1/5 bottom-1/4 w-[30vw] h-[30vw] bg-gradient-radial from-[#a78bfa]/30 via-[#6366f1]/10 to-transparent rounded-full blur-2xl opacity-50" />
      {/* Cubes with backside glow */}
      {cubes.map((cube, i) => {
        const isHovered = hovered === i;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${cube.x}vw`,
              top: `${cube.y}vh`,
              width: cube.size,
              height: cube.size,
              transform: `translate(-50%, -50%) rotateX(18deg) rotateZ(${cube.rotate}deg)`,
              zIndex: 1,
              pointerEvents: "auto",
            }}
          >
            {/* Backside glow */}
            <motion.div
              initial={false}
              animate={isHovered ? { opacity: 1, scale: 1.18 } : { opacity: 0.45, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              style={{
                position: "absolute",
                left: "50%",
                top: "60%",
                width: "140%",
                height: "140%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                borderRadius: 32,
                background: isHovered
                  ? `radial-gradient(circle at 50% 70%, ${cube.color}cc 0%, #6366f1bb 40%, transparent 80%)`
                  : `radial-gradient(circle at 50% 70%, ${cube.color}55 0%, #6366f155 40%, transparent 80%)`,
                filter: isHovered ? "blur(32px) brightness(1.5)" : "blur(24px) brightness(1.1)",
                opacity: isHovered ? 1 : 0.45,
                transition: "opacity 0.2s, filter 0.2s",
                pointerEvents: "none",
              }}
            />
            {/* Cube itself */}
            <motion.div
              initial={false}
              animate={
                isHovered
                  ? {
                      scale: 1.13,
                      boxShadow:
                        "0 0 32px 8px #a78bfa33, 0 0 64px 16px #6366f133, 0 0 0 4px #fff1",
                      filter: "brightness(1.08)",
                    }
                  : {
                      scale: 1,
                      boxShadow: "0 0 0 0 #0000",
                      filter: "brightness(0.7)",
                    }
              }
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, #18181b 60%, #27272a 100%)",
                borderRadius: 18,
                border: `2.5px solid ${cube.color}33`,
                boxSizing: "border-box",
                zIndex: 2,
                overflow: "hidden",
                pointerEvents: "auto",
                transition: "border 0.2s, box-shadow 0.2s",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GlowingCubesBackground; 