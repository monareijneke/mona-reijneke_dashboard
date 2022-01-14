import { useState, useEffect } from "react";
import { csv } from "d3";

const UseFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    csv("./test.csv")
      //   .then(res => {
      //     if (!res.ok) {
      //       throw Error("Could not receive data");
      //     }
      //     return res.text;
      //   })
      .then(data => {
        setData(data);
        // setIsPending(false);
        //   })
        //   .catch(err => {
        //     setError(err.message);
      });
  }, []);

  console.log(data);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Fetching data....</div>}
      {data && <div>Welkom!</div>}
    </div>
  );
};

export default UseFetch;
