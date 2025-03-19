import React from 'react';
import { motion } from 'framer-motion';
import {
  Paper,
  Typography,
  Box,
  Slider,
  CircularProgress,
  Button,
  Tooltip,
} from '@mui/material';

export const AICoach: React.FC = () => {
  const [analyzing, setAnalyzing] = React.useState(false);
  const [confidence, setConfidence] = React.useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          AI Coach Analysis
        </Typography>

        {analyzing ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <CircularProgress />
            </motion.div>
          </Box>
        ) : (
          <>
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography gutterBottom>Throw Power Adjustment</Typography>
                <Slider
                  value={confidence}
                  onChange={(_, value) => setConfidence(value as number)}
                  valueLabelDisplay="auto"
                  marks={[
                    { value: 0, label: 'Softer' },
                    { value: 50, label: 'Current' },
                    { value: 100, label: 'Harder' }
                  ]}
                />
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <InteractiveTargetGuide />
            </motion.div>

            <motion.div variants={itemVariants}>
              <RecommendedDrills />
            </motion.div>
          </>
        )}
      </Paper>
    </motion.div>
  );
};

const InteractiveTargetGuide: React.FC = () => {
  const [targetPoint, setTargetPoint] = React.useState({ x: 50, y: 50 });

  return (
    <Box sx={{ position: 'relative', height: 300, mb: 3 }}>
      <Typography gutterBottom>Aim Adjustment</Typography>
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 300,
          bottom: 300
        }}
        style={{
          position: 'absolute',
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'red',
          cursor: 'grab',
          x: targetPoint.x,
          y: targetPoint.y
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onDragEnd={(_, info) => {
          setTargetPoint({
            x: info.point.x,
            y: info.point.y
          });
        }}
      />
    </Box>
  );
};

const RecommendedDrills: React.FC = () => {
  const drills = [
    { id: 1, name: 'Double Practice', difficulty: 'Medium' },
    { id: 2, name: 'Triple 20 Training', difficulty: 'Hard' },
    { id: 3, name: 'Checkout Routes', difficulty: 'Expert' }
  ];

  return (
    <Box>
      <Typography gutterBottom>Recommended Drills</Typography>
      {drills.map((drill) => (
        <motion.div
          key={drill.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Tooltip title={`Difficulty: ${drill.difficulty}`}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
              onClick={() => {/* Handle drill selection */}}
            >
              {drill.name}
            </Button>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  );
};