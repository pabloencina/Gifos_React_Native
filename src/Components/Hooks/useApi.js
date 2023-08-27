import React, { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApi = () => {
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((respJson) => {
        setLoading(true);
        setData(respJson.data);

        // console.log("RESPUESTA", JSON.stringify(respJson));
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // En caso de error, asegúrate de cambiar loading a false
      });
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return { loading, data };
};

export default useApi;
