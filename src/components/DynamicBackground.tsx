import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function DynamicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="dynamic-bg">
      {/* Grid Pattern */}
      <div className="bg-grid" />

      {/* Animated Orbs */}
      <motion.div
        className="bg-orb orb-1"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="bg-orb orb-2"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Cursor Glow */}
      <motion.div
        className="cursor-glow"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />
    </div>
  );
}
