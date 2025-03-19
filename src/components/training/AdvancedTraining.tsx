import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  Slider,
} from '@mui/material';

export const AdvancedTraining: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [difficulty, setDifficulty] = React.useState(50);
  const [selectedTargets, setSelectedTargets] = React.useState<string[]>([]);
  const [trainingActive, setTrainingActive] = React.useState(false);

  const trainingSteps = [
    'Select Training Type',
    'Configure Settings',
    'Start Training',
  ];

  const trainingTypes = [
    {
      id: 'accuracy',
      name: 'Accuracy Training',
      description: 'Focus on hitting specific targets consistently',
      exercises: ['Single Numbers', 'Doubles', 'Triples'],
    },
    {
      id: 'checkout',
      name: 'Checkout Practice',
      description: 'Practice common checkout combinations',
      exercises: ['2-dart finishes', '3-dart finishes', 'Common routes'],
    },
    {
      id: 'pressure',
      name: 'Pressure Training',
      description: 'Practice under match-like conditions',
      exercises: ['Time pressure', 'Score pressure', 'Competition simulation'],
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {trainingSteps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && (
          <TrainingTypeSelector
            types={trainingTypes}
            onSelect={(type) => {
              // Handle training type selection
              setActiveStep(1);
            }}
          />
        )}

        {activeStep === 1 && (
          <TrainingConfigurator
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
            selectedTargets={selectedTargets}
            onTargetsChange={setSelectedTargets}
            onConfigure={() => setActiveStep(2)}
          />
        )}

        {activeStep === 2 && (
          <ActiveTraining
            difficulty={difficulty}
            targets={selectedTargets}
            onComplete={() => {
              setTrainingActive(false);
              // Handle training completion
            }}
          />
        )}
      </Box>
    </Box>
  );
};

const TrainingTypeSelector: React.FC<{
  types: any[];
  onSelect: (type: string) => void;
}> = ({ types, onSelect }) => {
  return (
    <Grid container spacing={2}>
      {types.map((type) => (
        <Grid item xs={12} md={4} key={type.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Paper
              sx={{ p: 2, cursor: 'pointer' }}
              onClick={() => onSelect(type.id)}
            >
              <Typography variant="h6" gutterBottom>
                {type.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {type.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {type.exercises.map((exercise: string) => (
                  <Chip
                    key={exercise}
                    label={exercise}
                    size="small"
                    sx={{ mr: 1, mt: 1 }}
                  />
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

const TrainingConfigurator: React.FC<{
  difficulty: number;
  onDifficultyChange: (value: number) => void;
  selectedTargets: string[];
  onTargetsChange: (targets: string[]) => void;
  onConfigure: () => void;
}> = ({
  difficulty,
  onDifficultyChange,
  selectedTargets,
  onTargetsChange,
  onConfigure,
}) => {
  return (
    <Box>
      <Typography gutterBottom>Difficulty Level</Typography>
      <Slider
        value={difficulty}
        onChange={(_, value) => onDifficultyChange(value as number)}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: 'Beginner' },
          { value: 50, label: 'Intermediate' },
          { value: 100, label: 'Advanced' },
        ]}
      />

      <Typography gutterBottom sx={{ mt: 4 }}>
        Select Training Targets
      </Typography>
      <DartboardTargetSelector
        selectedTargets={selectedTargets}
        onTargetsChange={onTargetsChange}
      />

      <Button
        variant="contained"
        onClick={onConfigure}
        sx={{ mt: 4 }}
      >
        Start Training
      </Button>
    </Box>
  );
};

const ActiveTraining: React.FC<{
  difficulty: number;
  targets: string[];
  onComplete: () => void;
}> = ({ difficulty, targets, onComplete }) => {
  // Training session logic here
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Training in Progress
      </Typography>
      {/* Add training interface */}
    </Box>
  );
};