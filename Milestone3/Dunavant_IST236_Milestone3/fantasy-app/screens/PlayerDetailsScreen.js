// Displays player details
import React from 'react';

// Import components
import { View, Text } from 'react-native';

export default function PlayerDetailsScreen() {
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
        Player Details
      </Text>

      {/* Card container for player info */}
      <View style={{
        backgroundColor:'white',
        padding:15,
        borderRadius:8
      }}>

        {/* Player info (placeholder for now) */}
        <Text style={{ marginBottom:10 }}>
          Name: Example Player
        </Text>

        <Text style={{ marginBottom:10 }}>
          Position: Guard
        </Text>

        <Text>
          Points: 25
        </Text>

      </View>

    </View>
  );
}