// Displays league standings
import React from 'react';

// Import components
import { View, Text } from 'react-native';

export default function LeagueScreen() {
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
        League Standings
      </Text>

      {/* Card container for standings */}
      <View style={{
        backgroundColor:'white',
        padding:15,
        borderRadius:8
      }}>

        {/* Team standings */}
        <Text style={{ marginBottom:10 }}>
          Team A - 10 pts
        </Text>

        <Text>
          Team B - 8 pts
        </Text>

      </View>

    </View>
  );
}