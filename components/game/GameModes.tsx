import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  LinearProgress,
  Dialog,
  Button,
} from '@mui/material';
import {
  SportsScore,
  Timer,
  Group,
  Casino,
  Star,
  EmojiEvents,
} from '@mui/icons-material';
import { AdvancedScoringSystem } from '../scoring/AdvancedScoring';
import { InteractiveEffects } from '../effects/InteractiveEffects';
import { ComboSystem } from '../effects/ComboSystem';

export const GameModes: React.FC = () => {
  const [selectedMode, setSelectedMode] = React.useState<string | null>(null);

  const gameModes = [
    {
      id: '501',
      name: '501',
      icon: <SportsScore />,
      description: 'Classic 501 game',
      difficulty: 'Standard',
      variants: ['Double Out', 'Straight Out'],
      players: '1-4',
    },
    {
      id: 'cricket',
      name: 'Cricket',
      icon: <Casino />,
      description: 'Strategic scoring on specific numbers',
      difficulty: 'Advanced',
      variants: ['Cut-Throat', 'No Points'],
      players: '2-4',
    },
    {
      id: 'around-the-clock',
      name: 'Around the Clock',
      icon: <Timer />,
      description: 'Hit numbers in sequence',
      difficulty: 'Beginner',
      variants: ['Doubles', 'Triples'],
      players: '1-4',
    },
    {
      id: 'team-league',
      name: 'Team League',
      icon: <Group />,
      description: 'Team-based competition',
      difficulty: 'Professional',
      variants: ['501 Teams', 'Cricket Teams'],
      players: '4-8',
    },
    {
      id: 'practice',
      name: 'Practice Mode',
      icon: <Star />,
      description: 'Customizable practice sessions',
      difficulty: 'Any',
      variants: ['Targets', 'Checkout Practice'],
      players: '1',
    },
    {
      id: 'tournament',
      name: 'Tournament',
      icon: <EmojiEvents />,
      description: 'Bracket-based competition',
      difficulty: 'Advanced',
      variants: ['Single Elimination', 'Double Elimination'],
      players: '8+',
    },
  ];

  return (
    <AnimateSharedLayout>
      <Grid container spacing={2}>
        {gameModes.map((mode) => (
          <Grid item xs={12} sm={6} md={4} key={mode.id}>
            <GameModeCard
              mode={mode}
              selected={selectedMode === mode.id}
              onSelect={() => setSelectedMode(mode.id)}
            />
          </Grid>
        ))}
      </Grid>

      <GameModeDialog
        mode={gameModes.find(m => m.id === selectedMode)}
        open={!!selectedMode}
        onClose={() => setSelectedMode(null)}
      />
    </AnimateSharedLayout>
  );
};

const GameModeCard: React.FC<{
  mode: any;
  selected: boolean;
  onSelect: () => void;
}> = ({ mode, selected, onSelect }) => {
  return (
    <motion.div
      layoutId={`card-${mode.id}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card
        onClick={onSelect}
        sx={{
          cursor: 'pointer',
          bgcolor: selected ? 'primary.light' : 'background.paper',
          transition: 'background-color 0.3s',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton color="primary" sx={{ mr: 1 }}>
              {mode.icon}
            </IconButton>
            <Typography variant="h6">{mode.name}</Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {mode.description}
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              size="small"
              label={`Difficulty: ${mode.difficulty}`}
              color="primary"
              variant="outlined"
            />
            <Chip
              size="small"
              label={`Players: ${mode.players}`}
              color="secondary"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GameModeDialog: React.FC<{
  mode: any;
  open: boolean;
  onClose: () => void;
}> = ({ mode, open, onClose }) => {
  if (!mode) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            {mode.name}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Game Variants
              </Typography>
              {mode.variants.map((variant: string) => (
                <motion.div
                  key={variant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 1 }}
                    onClick={() => {/* Handle variant selection */}}
                  >
                    {variant}
                  </Button>
                </motion.div>
              ))}
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              {/* Add game-specific settings */}
            </Grid>
          </Grid>

          {/* Add new scoring system */}
          {mode && mode.id === 'advanced' && (
            <AdvancedScoringSystem />
          )}
          
          {/* Add effects */}
          <InteractiveEffects />
          
          {/* Add combo system */}
          <ComboSystem />

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={() => {/* Start game */}}
            >
              Start Game
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Dialog>
  );
};