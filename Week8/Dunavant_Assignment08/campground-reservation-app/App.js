import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";

import HomeScreen from "./screens/HomeScreen";

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Playfair: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
      });

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View />;
  }

  return <HomeScreen />;
}