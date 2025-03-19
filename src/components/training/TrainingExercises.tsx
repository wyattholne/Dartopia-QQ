import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  LinearProgress,
  Grid,
  Paper,
} from '@mui/material';

interface Exercise {
  target: string;
  multiplier: number;
  timeLimit: number;
  required: number;
}

export const TrainingExercise: React.FC = () => {
  const [currentExercise, setCurrentExercise] = React.useState<Exercise>({
    target: '20',
    multiplier: 1,
    timeLimit: 30,
    required: 3,
  });
  const [hits, setHits] = React.useState(0);
  const [timeRemaining, setTimeRemaining] = React.useState(30);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  const handleHit = (success: boolean) => {
    if (success && isActive) {
      setHits((prev) => prev + 1);
    }
  };

  const startExercise = () => {
    setIsActive(true);
    setTimeRemaining(currentExercise.timeLimit);
    setHits(0);
  };

  const resetExercise = () => {
    setIsActive(false);
    setTimeRemaining(currentExercise.timeLimit);
    setHits(0);
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Current Target
          </Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                >
                  <Typography variant="h2" color="primary">
                    {currentExercise.multiplier > 1 ? 'D' : ''}{currentExercise.target}
                  </Typography>
                </motion.div>
                <Typography variant="subtitle1" color="text.secondary">
                  {hits}/{currentExercise.required} hits required
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={(timeRemaining / currentExercise.timeLimit) * 100}
                  size={80}
                  thickness={4}
                />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {timeRemaining}s
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <LinearProgress
            variant="determinate"
            value={(hits / currentExercise.required) * 100}
            sx={{ mt: 3, height: 10, borderRadius: 5 }}
          />
        </Paper>
      </motion.div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={isActive ? resetExercise : startExercise}
          >
            {isActive ? 'Reset' : 'Start'}
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => handleHit(true)}
            disabled={!isActive}
          >
            Hit
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => handleHit(false)}
            disabled={!isActive}
          >
            Miss
          </Button>
        </Grid>
      </Grid>

      <AnimatePresence>
        {(hits >= currentExercise.required || timeRemaining === 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Exercise Complete!
              </Typography>
              <Typography variant="body1">
                Accuracy: {((hits / (currentExercise.required + (currentExercise.required - hits))) * 100).toFixed(1)}%
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={resetExercise}
              >
                Try Again
              </Button>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
