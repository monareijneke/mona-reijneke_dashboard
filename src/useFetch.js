import { useState, useEffect } from "react";
import React from "react";

const UseFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error("Could not receive data");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [url]);
  // const reader = new FileReader();
  // reader.readAsText(data);
  console.log(data);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Fetching data....</div>}
      {data && <div>Chart</div>}
    </div>
  );
};

export default UseFetch;
