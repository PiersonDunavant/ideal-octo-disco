// Import React
import React from 'react';

// Import components
import { View, Text, FlatList, Button, TextInput } from 'react-native';

// Displays list of players
export default function PlayersScreen({ navigation }) {

  // Sample player data
  const players = [
    { id: '1', name: 'LeBron James' },
    { id: '2', name: 'Steph Curry' }
  ];

  return (
    <View style={{ padding:20 }}>
      <Text>Players</Text>

      {/* Input field for searching players */}
      <TextInput 
        placeholder="Search Player" 
        style={{ borderWidth:1, marginBottom:10 }} 
      />

      {/* Display player list */}
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>

            {/* Navigate to player details */}
            <Button 
              title="View" 
              onPress={() => navigation.navigate('PlayerDetails')} 
            />
          </View>
        )}
      />
    </View>
  );
}