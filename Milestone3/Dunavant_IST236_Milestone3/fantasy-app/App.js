// Import React and useState for storing team data
import React, { useState } from 'react';

// Import navigation tools
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import icons for tab bar
import { Ionicons } from '@expo/vector-icons';

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


// ---------------- TAB NAVIGATION ----------------
// Includes icons and passes team data between screens
function MainTabs({ team, setTeam }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Style the tab bar
        tabBarStyle: { backgroundColor: '#1b5e20' }, // dark green
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',

        // Set icon based on tab name
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Team') iconName = 'people';
          else if (route.name === 'Players') iconName = 'basketball';
          else if (route.name === 'League') iconName = 'trophy';

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      {/* Home Screen */}
      <Tab.Screen name="Home" component={HomeScreen} />

      {/* Team Screen (needs team + setTeam for remove feature) */}
      <Tab.Screen name="Team">
        {props => <TeamScreen {...props} team={team} setTeam={setTeam} />}
      </Tab.Screen>

      {/* Players Screen (needs team + setTeam for drafting) */}
      <Tab.Screen name="Players">
        {props => <PlayersScreen {...props} team={team} setTeam={setTeam} />}
      </Tab.Screen>

      {/* League Screen */}
      <Tab.Screen name="League" component={LeagueScreen} />

    </Tab.Navigator>
  );
}


// ---------------- MAIN APP ----------------
export default function App() {

  // Global team state (shared across screens)
  const [team, setTeam] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Splash screen loads first */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown:false }} 
        />

        {/* Main tab navigation with state passed in */}
        <Stack.Screen name="MainTabs" options={{ headerShown:false }}>
          {props => <MainTabs {...props} team={team} setTeam={setTeam} />}
        </Stack.Screen>

        {/* Additional screens */}
        <Stack.Screen name="PlayerDetails" component={PlayerDetailsScreen} />
        <Stack.Screen name="EditTeam" component={EditTeamScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}