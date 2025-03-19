import React from 'react';
import {
  Paper,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Dialog
} from '@mui/material';

export const SocialHub: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [challengeDialogOpen, setChallengDialogOpen] = React.useState(false);

  return (
    <Paper sx={{ p: 2 }}>
      <Tabs
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
        sx={{ mb: 2 }}
      >
        <Tab label="Friends" />
        <Tab label="Challenges" />
        <Tab label="Achievements" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <FriendsList />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <ChallengesList />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <AchievementsList />
      </TabPanel>

      <ChallengeDialog 
        open={challengeDialogOpen}
        onClose={() => setChallengDialogOpen(false)}
      />
    </Paper>
  );
};

const FriendsList: React.FC = () => {
  const [friends, setFriends] = React.useState([]);

  React.useEffect(() => {
    // Fetch friends list
    fetchFriends();
  }, []);

  return (
    <List>
      {friends.map((friend) => (
        <ListItem
          key={friend.id}
          secondaryAction={
            <Button variant="outlined" size="small">
              Challenge
            </Button>
          }
        >
          <ListItemAvatar>
            <Avatar src={friend.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={friend.name}
            secondary={`Last active: ${friend.lastActive}`}
          />
        </ListItem>
      ))}
    </List>
  );
};