import { useState } from "react";
import useFetch from "./UseFetch";

const CsvConvert = () => {
  const { data, isPending, error } = useFetch(
    "./test.csv"
    //   "https://docs.google.com/spreadsheets/d/1BHjq5MjpuSItvVbnQcEdQt_v956-Ks1lr3f_nEFkTks/edit?usp=sharing"
  );

  const reader = new FileReader();
  reader.readAsText(data);

  console.log(reader);

  return (
    <div>
      {Error && <div>{error}</div>}
      {isPending && <div>Fetching data....</div>}
      {data && <div>Welkom!</div>}
    </div>
  );
};

export default CsvConvert;
