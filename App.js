import { StatusBar } from "expo-status-bar";
import useCustomFonts from "./src/Components/Hooks/useCustomFonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/Components/Navigation";
import React from "react";

export default function App() {
  const fontsToLoad = ["Montserrat", "Roboto"];
  const fontsLoaded = useCustomFonts(fontsToLoad);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Navigation />

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
