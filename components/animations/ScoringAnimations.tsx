import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

interface ScoringAnimationProps {
  score: number;
  type: 'regular' | 'special' | 'finish';
  position: { x: number; y: number };
}

export const ScoringAnimation: React.FC<ScoringAnimationProps> = ({
  score,
  type,
  position,
}) => {
  const variants = {
    regular: {
      initial: { scale: 2, opacity: 0, y: 0 },
      animate: { scale: 1, opacity: 1, y: -50 },
      exit: { scale: 0, opacity: 0, y: -100 },
    },
    special: {
      initial: { rotate: 0, scale: 0 },
      animate: { 
        rotate: 360,
        scale: [0, 1.5, 1],
        transition: { duration: 0.8 }
      },
      exit: { scale: 0, opacity: 0 },
    },
    finish: {
      initial: { scale: 0, opacity: 0 },
      animate: {
        scale: [0, 1.5, 1],
        opacity: 1,
        transition: {
          duration: 1,
          times: [0, 0.5, 1],
        },
      },
      exit: { scale: 0, opacity: 0 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
        }}
        variants={variants[type]}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Typography
          variant="h2"
          sx={{
            color: type === 'special' ? 'secondary.main' : 'primary.main',
            textShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}
        >
          {score}
        </Typography>
        {type !== 'regular' && <ParticleEffect position={position} />}
      </motion.div>
    </AnimatePresence>
  );
};

export const ParticleEffect: React.FC<{ position: { x: number; y: number } }> = ({
  position,
}) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i * Math.PI * 2) / 20,
  }));

  return (
    <Box sx={{ position: 'absolute', left: 0, top: 0 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            backgroundColor: 'gold',
            borderRadius: '50%',
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos(particle.angle) * 100,
            y: Math.sin(particle.angle) * 100,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
        />
      ))}
    </Box>
  );
};
