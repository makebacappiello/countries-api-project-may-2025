import React from "react";
import "../App.css";

export default function CountryCardList({
  name,
  population,
  region,
  capital,
  img,
}) {
  return (
    <div className="cardA">
      <h1>Country Detail</h1>
      <img src={img} />
      <p>COUNTRY: {name}</p>
      <p>POPULATION: {population}</p>
      <p>REGION:{region}</p>
      <p>CAPITAL:{capital}</p>
    </div>
  );
}
