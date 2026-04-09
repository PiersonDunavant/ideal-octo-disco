import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import SportsNewsScreen from './screens/SportsNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="US" component={USNewsScreen} />
      <Tabs.Screen name="World" component={WorldNewsScreen} />
      <Tabs.Screen name="Sports" component={SportsNewsScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={TabsNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}