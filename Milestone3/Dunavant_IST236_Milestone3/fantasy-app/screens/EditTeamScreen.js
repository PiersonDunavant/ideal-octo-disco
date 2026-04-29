// Allows editing team name
import React from 'react';

// Import components
import { View, Text, TextInput, Button } from 'react-native';

export default function EditTeamScreen() {

  return (
    // Main container with forest green theme
    <View style={{ 
      flex:1, 
      padding:20, 
      backgroundColor:'#228B22' 
    }}>

      {/* Screen title */}
      <Text style={{ 
        fontSize:24, 
        fontWeight:'bold', 
        marginBottom:20, 
        color:'white' 
      }}>
        Edit Team
      </Text>

      {/* Card container for form */}
      <View style={{
        backgroundColor:'white',
        padding:15,
        borderRadius:8
      }}>

        {/* Input label */}
        <Text style={{ marginBottom:5 }}>Team Name</Text>

        {/* Text input for team name */}
        <TextInput 
          placeholder="Enter Team Name" 
          style={{ 
            borderWidth:1, 
            borderColor:'#ccc',
            marginBottom:15,
            padding:10,
            borderRadius:5
          }} 
        />

        {/* Save button */}
        <Button 
          title="Save Team" 
          onPress={() => alert("Team Saved")} 
        />

      </View>
    </View>
  );
}