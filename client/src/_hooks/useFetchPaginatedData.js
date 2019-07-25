import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPaginatedData = (url, setData) => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPending(true);
    axios(url)
      .then(response => {
        setData(response.data.results);
        setPending(false);
      })
      .catch(error => {
        setError(error);
        setPending(false);
      });
  }, [url, setData]);

  return [pending, error];
};

export default useFetchPaginatedData;
