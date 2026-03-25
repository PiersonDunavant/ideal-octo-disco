import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import HomeScreen from "./screens/HomeScreen";
import DestinationScreen from "./screens/DestinationScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await Font.loadAsync({
        Playfair: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
      });
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  if (!appIsReady) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Destinations" component={DestinationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}