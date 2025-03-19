import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Box,
  Typography,
  Grid,
} from '@mui/material';

interface GameConfig {
  players: string[];
  startingScore: number;
  doubleIn: boolean;
  doubleOut: boolean;
  sets: number;
  legs: number;
  timeLimit?: number;
  specialRules: Record<string, boolean>;
}

export const GameConfigDialog: React.FC<{
  open: boolean;
  variant: ScoringVariant;
  onClose: () => void;
  onStart: (config: GameConfig) => void;
}> = ({ open, variant, onClose, onStart }) => {
  // ... component implementation as provided ...
};
