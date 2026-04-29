// Splash screen shown at app start
import React, { useEffect } from 'react';

// Import components
import { View, Text } from 'react-native';

export default function SplashScreen({ navigation }) {

  // Move to main app after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);

    // Cleanup timer (good practice)
    return () => clearTimeout(timer);
  }, []);

  return (
    // Full screen centered layout with forest theme
    <View style={{ 
      flex:1, 
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor:'#228B22' 
    }}>

      {/* App title */}
      <Text style={{ 
        fontSize:28, 
        fontWeight:'bold', 
        color:'white', 
        marginBottom:10 
      }}>
        Fantasy League App
      </Text>

      {/* Subtitle */}
      <Text style={{ 
        fontSize:16, 
        color:'white' 
      }}>
        Build Your Ultimate Team
      </Text>

    </View>
  );
}