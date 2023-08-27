import React, { useState } from "react";
import CardGifs from "../CardGifs/CardGifs";
import { View } from "react-native";
import DetailCardGifById from "../CardGifs/DetailCardGifById";

const ScreenGifs = () => {
  const [category, setCategory] = useState("");
  const [selectedGif, setSelectedGif] = useState(null);
  return (
    <CardGifs
      setSelectedGif={setSelectedGif}
      category={category}
      setCategory={setCategory}
      selectedGif={selectedGif}
    />
  );
};

export default ScreenGifs;
