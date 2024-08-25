import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResusults] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(url, { signal: signal });

        if (!response.ok) {
          response = await response.json();
          setResusults(response);
        } else {
          throw new Error(`error while fetching data`);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          setError(`fetching data is aborted!`);
        } else {
          setError(err?.message || `error while fetching data`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);
  return { isLoading, results, error };
};

export default useFetch;
