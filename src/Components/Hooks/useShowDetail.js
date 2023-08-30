import React, { useState } from "react";

const useShowDetail = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);

  const handleBackToGifs = () => {
    setShowDetail(!showDetail);
  };
  return {
    showDetail,
    setShowDetail,
    handleBackToGifs,
    selectedGif,
    setSelectedGif,
  };
};

export default useShowDetail;
