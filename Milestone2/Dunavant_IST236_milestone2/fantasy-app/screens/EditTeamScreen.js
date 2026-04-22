// Import React
import React from 'react';

// Import components
import { View, Text, TextInput, Button, Alert } from 'react-native';

// Allows user to edit team information
export default function EditTeamScreen() {
  return (
    <View style={{ padding:20 }}>
      <Text>Edit Team</Text>

      {/* Input fields for team details */}
      <TextInput 
        placeholder="Team Name" 
        style={{ borderWidth:1, marginBottom:10 }} 
      />

      <TextInput 
        placeholder="Notes" 
        style={{ borderWidth:1, marginBottom:10 }} 
      />

      {/* Save button */}
      <Button 
        title="Save" 
        onPress={() => Alert.alert("Saved")} 
      />
    </View>
  );
}