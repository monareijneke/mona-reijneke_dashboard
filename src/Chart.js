import { VictoryBar, VictoryChart } from "victory";
import React from "react";
// import { useState } from "react";
// import UseFetch from "./UseFetch";

const data = [
  { Naam: "Eveline", Opdracht: "Scrum", moeilijk: 3, leuk: 5 },
  { Naam: "Eveline", Opdracht: "w3", moeilijk: 5, leuk: 1 },
  { Naam: "Eveline", Opdracht: "w7", moeilijk: 4, leuk: 1 },
  { Naam: "Eveline", Opdracht: "w9", moeilijk: 1, leuk: 5 },
  { Naam: "Peter", Opdracht: "Scrum", moeilijk: 2, leuk: 4 },
  { Naam: "Peter", Opdracht: "w3", moeilijk: 3, leuk: 5 },
  { Naam: "Peter", Opdracht: "w7", moeilijk: 4, leuk: 4 },
  { Naam: "Peter", Opdracht: "w9", moeilijk: 5, leuk: 2 },
  { Naam: "Steven", Opdracht: "Scrum", moeilijk: 1, leuk: 5 },
  { Naam: "Steven", Opdracht: "w3", moeilijk: 1, leuk: 4 },
  { Naam: "Steven", Opdracht: "w7", moeilijk: 2, leuk: 3 },
  { Naam: "Steven", Opdracht: "w9", moeilijk: 2, leuk: 1 },
  { Naam: "Sandra", Opdracht: "Scrum", moeilijk: 3, leuk: 5 },
  { Naam: "Sandra", Opdracht: "w3", moeilijk: 5, leuk: 1 },
  { Naam: "Sandra", Opdracht: "w7", moeilijk: 4, leuk: 1 },
  { Naam: "Sandra", Opdracht: "w9", moeilijk: 1, leuk: 5 },
];

const Chart = () => (
  <VictoryChart
    width={500}
    height={300}
    domainPadding={10}
    padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
  >
    <VictoryBar data={data} y="moeilijk" x="Opdracht" />
  </VictoryChart>
);

export default Chart;
