import React from "react";

const useApiKeyUrl = () => {
  const API_URL_SEARCH = "https://api.giphy.com/v1/gifs/search";
  const API_KEY = "Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy";
  const API_URL_TRENDING = "https://api.giphy.com/v1/gifs/trending";
  return { API_URL_SEARCH, API_KEY, API_URL_TRENDING };
};

export default useApiKeyUrl;
