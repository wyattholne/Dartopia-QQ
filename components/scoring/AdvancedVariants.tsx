import { TrendingUp, Psychology, Whatshot } from '@mui/icons-material';
import { ScoringVariant } from './types';
import React from 'react';
import { motion } from 'framer-motion';
import { useSound } from 'use-sound';

export const advancedScoringVariants: ScoringVariant[] = [
  {
    id: 'progressive-challenge',
    name: 'Progressive Challenge',
    description: 'Score increases with successful throws',
    rules: [
      'Start with base multiplier',
      'Consecutive hits increase multiplier',
      'Miss resets multiplier',
      'Reach target score to win',
    ],
    difficulty: 'Expert',
    players: '1-4',
    icon: <TrendingUp />,
    calculator: (score, state) => {
      const multiplier = state.consecutiveHits * 0.5 + 1;
      return score * multiplier;
    },
    specialRules: {
      multiplierCap: 4,
      streakBonus: true,
      riskReward: true,
    },
  },
  // ... other variants as provided ...
];

const additionalScoringVariants = {
  // ...variant definitions as provided...
};

export default additionalScoringVariants;
