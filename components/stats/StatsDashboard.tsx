import React from 'react';
import {
  Paper,
  Grid,
  Typography,
  Box
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export const StatsDashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <ScoreTrends />
      </Grid>
      <Grid item xs={12} md={6}>
        <AccuracyHeatmap />
      </Grid>
      <Grid item xs={12} md={4}>
        <PerformanceMetrics />
      </Grid>
      <Grid item xs={12} md={8}>
        <RecentGames />
      </Grid>
    </Grid>
  );
};

const ScoreTrends: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // Fetch score trend data
    fetchScoreTrends();
  }, []);

  return (
    <Paper sx={{ p: 2, height: 300 }}>
      <Typography variant="h6" gutterBottom>
        Score Trends
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};