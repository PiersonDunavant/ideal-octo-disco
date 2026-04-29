// Home screen for navigation
import React from 'react';

// Import components
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
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
        Home
      </Text>

      {/* Card container for navigation buttons */}
      <View style={{
        backgroundColor:'white',
        padding:15,
        borderRadius:8
      }}>

        {/* Navigate to Team screen */}
        <View style={{ marginBottom:15 }}>
          <Button 
            title="My Team" 
            onPress={() => navigation.navigate('Team')} 
          />
        </View>

        {/* Navigate to Players screen */}
        <View style={{ marginBottom:15 }}>
          <Button 
            title="Players" 
            onPress={() => navigation.navigate('Players')} 
          />
        </View>

        {/* Navigate to League screen */}
        <View>
          <Button 
            title="League" 
            onPress={() => navigation.navigate('League')} 
          />
        </View>

      </View>
    </View>
  );
}