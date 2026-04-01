import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './navigation/TabNavigator';
import NewsDetailScreen from './screens/NewsDetailScreen';
import BookmarksScreen from './screens/BookmarksScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={TabNavigator}
        />
        <Stack.Screen
          name="Bookmarks"
          component={BookmarksScreen}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}