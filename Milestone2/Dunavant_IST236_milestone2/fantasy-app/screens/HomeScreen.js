// Import React
import React from 'react';

// Import components
import { View, Text, Button } from 'react-native';

// Home screen for navigation
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding:20 }}>
      <Text>Home Screen</Text>

      {/* Buttons to navigate to other screens */}
      <Button title="My Team" onPress={() => navigation.navigate('Team')} />
      <Button title="Players" onPress={() => navigation.navigate('Players')} />
      <Button title="League" onPress={() => navigation.navigate('League')} />
    </View>
  );
}