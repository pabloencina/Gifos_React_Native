import { useEffect, useState } from "react";
import * as Font from "expo-font";

const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require("../../../assets/MontserratAlternates-Italic.ttf"),
      Roboto: require("../../../assets/RobotoCondensed-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useCustomFonts;
