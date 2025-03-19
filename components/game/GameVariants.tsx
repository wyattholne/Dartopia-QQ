import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Timer,
  Leaderboard,
  GroupWork,
  Casino,
  Speed,
  Psychology,
} from '@mui/icons-material';

interface GameVariant {
  id: string;
  name: string;
  description: string;
  rules: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  players: string;
  duration: string;
  icon: React.ReactNode;
}

const gameVariants: GameVariant[] = [
  {
    id: 'shanghai',
    name: 'Shanghai',
    description: 'Progress through numbers 1-7, hitting singles, doubles, and triples',
    rules: [
      'Start with number 1',
      'Must hit single, double, and triple of each number',
      'First to complete all numbers wins',
      'Hitting Shanghai (all three in one turn) wins instantly'
    ],
    difficulty: 'Intermediate',
    players: '2-4',
    duration: '15-20 min',
    icon: <Casino />
  },
  // ... other variants as provided ...
];

export const GameVariantSelector: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = React.useState<string | null>(null);
  const [gameStarting, setGameStarting] = React.useState(false);

  const handleStartGame = async () => {
    setGameStarting(true);
    // Add game start logic here
    await new Promise(resolve => setTimeout(resolve, 1500));
    setGameStarting(false);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {gameVariants.map((variant) => (
          <Grid item xs={12} md={6} lg={4} key={variant.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Paper
                sx={{
                  p: 3,
                  cursor: 'pointer',
                  height: '100%',
                  bgcolor: selectedVariant === variant.id ? 'primary.light' : 'background.paper',
                }}
                onClick={() => setSelectedVariant(variant.id)}
              >
                {/* Variant content implementation */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton color="primary" sx={{ mr: 1 }}>
                    {variant.icon}
                  </IconButton>
                  <Typography variant="h6">{variant.name}</Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {variant.description}
                </Typography>

                <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    size="small"
                    label={variant.difficulty}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    size="small"
                    label={`Players: ${variant.players}`}
                    color="secondary"
                    variant="outlined"
                  />
                  <Chip
                    size="small"
                    label={variant.duration}
                    variant="outlined"
                  />
                </Box>

                <AnimatePresence>
                  {selectedVariant === variant.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Rules:
                        </Typography>
                        <ul style={{ margin: 0, paddingLeft: 20 }}>
                          {variant.rules.map((rule, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Typography variant="body2">
                                {rule}
                              </Typography>
                            </motion.li>
                          ))}
                        </ul>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {selectedVariant && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              disabled={gameStarting}
              onClick={handleStartGame}
              startIcon={gameStarting ? <CircularProgress size={20} /> : null}
            >
              {gameStarting ? 'Starting Game...' : 'Start Game'}
            </Button>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};
