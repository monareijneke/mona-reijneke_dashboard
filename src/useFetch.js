import { useState, useEffect } from "react";

const useFetch = url => {
  const [students, setStudents] = useState(" ");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error("Could not receive data");
        }
        return res.text();
      })
      .then(data => {
        setStudents(data);
        console.log(students);
        setIsPending(false);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);
  return { students, isPending, error };
};

export default useFetch;
