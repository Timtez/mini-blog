import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //abort controller
    const abortController = new AbortController();

    // i am using setTimeOut to make a delay in the request as it is being done on my local server
    // the fetch method returns a Promise which resolves to the response (object) of that request.
    // the abort Controller is used to about the fetch request before it has completed.

    
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Oops! Could not fetch that resource.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            // console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 200);

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
