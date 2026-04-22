// Import React
import React from 'react';

// Import components
import { View, Text, Button, Alert } from 'react-native';

// Displays player details
export default function PlayerDetailsScreen() {
  return (
    <View style={{ padding:20 }}>
      <Text>Player Details</Text>

      {/* Alert confirms player is drafted */}
      <Button 
        title="Draft Player" 
        onPress={() => Alert.alert("Player Drafted")} 
      />
    </View>
  );
}