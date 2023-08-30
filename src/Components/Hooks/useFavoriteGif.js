import React, { useState } from "react";

const useFavoriteGif = () => {
  const [favorite, setFavorite] = useState(true);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return { favorite, handleFavorite };
};
export default useFavoriteGif;
