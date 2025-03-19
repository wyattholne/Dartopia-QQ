import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Paper, Typography, Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';

export const ScoreBoard: React.FC<{ scores: Record<string, number> }> = ({ scores }) => {
  return (
    <AnimateSharedLayout>
      <motion.div layout>
        <Paper sx={{ p: 2, overflow: 'hidden' }}>
          <Typography variant="h6" gutterBottom>
            Scores
          </Typography>
          
          {Object.entries(scores).map(([player, score]) => (
            <AnimatedScoreRow
              key={player}
              player={player}
              score={score}
              isCurrentPlayer={/* check if current player */}
            />
          ))}
        </Paper>
      </motion.div>
    </AnimateSharedLayout>
  );
};

const AnimatedScoreRow: React.FC<{
  player: string;
  score: number;
  isCurrentPlayer: boolean;
}> = ({ player, score, isCurrentPlayer }) => {
  const springProps = useSpring({
    number: score,
    from: { number: score + 100 },
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 1,
          p: 1,
          borderRadius: 1,
          bgcolor: isCurrentPlayer ? 'primary.light' : 'transparent',
        }}
      >
        <Typography>{player}</Typography>
        <animated.div>
          {springProps.number.to((n) => Math.floor(n))}
        </animated.div>
      </Box>
    </motion.div>
  );
};