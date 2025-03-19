import React from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Drawer, 
  Typography,
  IconButton,
  Avatar,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications,
  Dashboard as DashboardIcon,
  SportsEsports as GamesIcon,
  Timeline as StatsIcon,
  Group as SocialIcon,
  School as TrainingIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export const Dashboard: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Darts Pro Analytics
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <Avatar sx={{ ml: 1 }} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <SidebarMenu />
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <MainContent />
      </Box>
    </Box>
  );
};

const SidebarMenu: React.FC = () => {
  const menuItems = [
    { icon: <DashboardIcon />, text: 'Dashboard', path: '/' },
    { icon: <GamesIcon />, text: 'Games', path: '/games' },
    { icon: <StatsIcon />, text: 'Statistics', path: '/stats' },
    { icon: <SocialIcon />, text: 'Social', path: '/social' },
    { icon: <TrainingIcon />, text: 'Training', path: '/training' },
  ];

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} component={Link} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

const MainContent: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <LiveGameView />
      </Grid>
      <Grid item xs={12} md={4}>
        <PlayerStats />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentActivity />
      </Grid>
      <Grid item xs={12} md={6}>
        <AICoachTips />
      </Grid>
    </Grid>
  );
};