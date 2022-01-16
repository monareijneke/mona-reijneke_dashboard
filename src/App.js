import "./App.css";
import React from "react";
import Chart from "./Chart";

function App() {
  // const { data, isPending, error } = UseFetch("./test.csv");
  // "test.csv"
  //   "https://docs.google.com/spreadsheets/d/1BHjq5MjpuSItvVbnQcEdQt_v956-Ks1lr3f_nEFkTks/edit?usp=sharing"

  return (
    <>
      <div className="App-header">
        <div>
          <h2>Student Dashboard</h2>
        </div>
      </div>
      <div className="App-main">
        <div>
          <Chart />
        </div>
      </div>
    </>
  );
}

export default App;
