import React from "react";
import { Text, View } from "react-native";
import Favorites from "../Favorites/Favorites";
import DetailCardGifById from "../CardGifs/DetailCardGifById";

const ScreenFavorites = () => {
  return (
    <View>
      {/* <Favorites /> */}
      <DetailCardGifById />
    </View>
  );
};

export default ScreenFavorites;
