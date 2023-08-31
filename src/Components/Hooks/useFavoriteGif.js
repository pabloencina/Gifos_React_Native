import { useState } from "react";

const useFavoriteGif = () => {
  const [favorite, setFavorite] = useState(true);

  const handleFavorite = async () => {
    setFavorite(!favorite);
    if (favorite) {
      console.log("DESACTIVADO");
    }
  };

  return { favorite, handleFavorite };
};
export default useFavoriteGif;
