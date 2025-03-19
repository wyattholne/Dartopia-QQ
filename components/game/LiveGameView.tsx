import React from 'react';
import { 
  Paper, 
  Typography, 
  Box, 
  Grid,
  Button,
  CircularProgress 
} from '@mui/material';
import { useSocket } from '../../hooks/useSocket';

export const LiveGameView: React.FC = () => {
  const socket = useSocket();
  const [gameState, setGameState] = React.useState({
    currentPlayer: '',
    scores: {},
    lastThrow: null,
    isActive: false
  });

  React.useEffect(() => {
    socket.on('gameUpdate', (newState) => {
      setGameState(newState);
    });

    return () => {
      socket.off('gameUpdate');
    };
  }, [socket]);

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Live Game
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <DartboardDisplay />
        </Grid>
        <Grid item xs={12} md={4}>
          <ScoreBoard scores={gameState.scores} />
        </Grid>
        <Grid item xs={12}>
          <ThrowHistory throws={gameState.throws} />
        </Grid>
      </Grid>
    </Paper>
  );
};

const DartboardDisplay: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw dartboard
    drawDartboard(ctx);
    
    // Draw detected throws
    drawThrows(ctx);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <canvas ref={canvasRef} width={400} height={400} />
      <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
        <ThrowOverlay />
      </Box>
    </Box>
  );
};

const ScoreBoard: React.FC<{ scores: Record<string, number> }> = ({ scores }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Scores
      </Typography>
      {Object.entries(scores).map(([player, score]) => (
        <Box key={player} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>{player}</Typography>
          <Typography>{score}</Typography>
        </Box>
      ))}
    </Paper>
  );
};