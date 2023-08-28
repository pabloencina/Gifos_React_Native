import React, { useState } from "react";
import CardGifs from "../CardGifs/CardGifs";

const ScreenGifs = () => {
  const [category, setCategory] = useState("");

  return <CardGifs category={category} setCategory={setCategory} />;
};

export default ScreenGifs;
