import React, { useState } from "react";

const useFavoriteGif = () => {
  const [favorite, setFavorite] = useState(true);
  const [OnPressIconFavorite, setOnPressIconFavorite] = [[]];

  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return { handleFavorite, favorite };
};

export default useFavoriteGif;
