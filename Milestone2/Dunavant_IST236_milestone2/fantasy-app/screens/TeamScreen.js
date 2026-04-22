// Import React
import React from 'react';

// Import components
import { View, Text, FlatList, Button } from 'react-native';

// Displays user's team
export default function TeamScreen({ navigation }) {

  // Sample team data (used for milestone)
  const team = [
    { id: '1', name: 'Player A' },
    { id: '2', name: 'Player B' }
  ];

  return (
    <View style={{ padding:20 }}>
      <Text>My Team</Text>

      {/* Display players using FlatList */}
      <FlatList
        data={team}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      {/* Navigate to edit team screen */}
      <Button title="Edit Team" onPress={() => navigation.navigate('EditTeam')} />
    </View>
  );
}