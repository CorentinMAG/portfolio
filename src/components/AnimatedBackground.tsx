import React, { useMemo } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: index,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
        background: "linear-gradient(45deg, #0a192f 0%, #112240 100%)",
      }}
    >
      {/* Milky Way gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          opacity: 0.5,
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: "absolute",
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: `rgba(255, 255, 255, ${star.opacity})`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            willChange: "transform, opacity",
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${
              star.opacity
            })`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Nebula effect */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 30% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at center, transparent 0%, rgba(10, 25, 47, 0.8) 70%)
          `,
        }}
      />

      {/* Additional star field */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 50% 16%, rgba(255, 255, 255, 0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 90% 90%, rgba(255, 255, 255, 0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 13% 55%, rgba(255, 255, 255, 0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 75% 44%, rgba(255, 255, 255, 0.3) 50%, transparent 50%)
          `,
          backgroundSize: "100% 100%",
          opacity: 0.5,
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;
