import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, setData) => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPending(true);
    axios(url)
      .then(response => {
        setData(response.data);
        setPending(false);
      })
      .catch(error => {
        setError(error);
        setPending(false);
      });
  }, [url, setData]);
  return [pending, error];
};

export default useFetchData;
