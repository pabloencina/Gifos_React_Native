import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import useCustomFonts from "./src/Components/Hooks/useCustomFonts";
import AppBar from "./src/Components/AppBar/AppBar";
import Main from "./src/Components/Main/Main";

export default function App() {
  const fontsToLoad = ["Montserrat", "Roboto"];
  const fontsLoaded = useCustomFonts(fontsToLoad);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
