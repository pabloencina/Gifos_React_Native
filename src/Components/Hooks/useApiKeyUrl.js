import React from "react";

const useApiKeyUrl = () => {
  const API_URL_SEARCH = "https://api.giphy.com/v1/gifs/search";
  const API_URL_AUTOCOMPLETE = "https://api.giphy.com/v1/gifs/search/tags";
  const API_KEY = "Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy";
  const API_URL_TRENDING = "https://api.giphy.com/v1/gifs/trending";
  const API_WORD_TRENDING = "https://api.giphy.com/v1/trending/searches";
  return {
    API_URL_SEARCH,
    API_KEY,
    API_URL_TRENDING,
    API_URL_AUTOCOMPLETE,
    API_WORD_TRENDING,
  };
};

export default useApiKeyUrl;
