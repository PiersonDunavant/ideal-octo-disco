// Import React and hook
import React, { useEffect } from 'react';

// Import components
import { View, Text } from 'react-native';

// Splash screen shown when app starts
export default function SplashScreen({ navigation }) {

  // Automatically move to main app after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Fantasy Sports League App</Text>
    </View>
  );
}