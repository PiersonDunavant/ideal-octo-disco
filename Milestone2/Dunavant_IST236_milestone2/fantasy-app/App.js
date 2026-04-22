// Import React
import React from 'react';

// Import navigation tools
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import all screens
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import TeamScreen from './screens/TeamScreen';
import PlayersScreen from './screens/PlayersScreen';
import PlayerDetailsScreen from './screens/PlayerDetailsScreen';
import LeagueScreen from './screens/LeagueScreen';
import EditTeamScreen from './screens/EditTeamScreen';

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom tab navigation
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="Players" component={PlayersScreen} />
      <Tab.Screen name="League" component={LeagueScreen} />
    </Tab.Navigator>
  );
}

// Main app function
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Splash screen loads first */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown:false }} 
        />

        {/* Main tab navigation */}
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabs} 
          options={{ headerShown:false }} 
        />

        {/* Additional screens */}
        <Stack.Screen name="PlayerDetails" component={PlayerDetailsScreen} />
        <Stack.Screen name="EditTeam" component={EditTeamScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}