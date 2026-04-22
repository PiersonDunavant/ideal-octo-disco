// Import React
import React from 'react';

// Import components
import { View, Text } from 'react-native';

// Displays league standings
export default function LeagueScreen() {
  return (
    <View style={{ padding:20 }}>
      <Text>League Standings</Text>

      {/* Sample standings */}
      <Text>Team 1 - 10 pts</Text>
      <Text>Team 2 - 8 pts</Text>
    </View>
  );
}