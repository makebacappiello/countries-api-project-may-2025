import React from "react";
import "../App.css";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  img,
}) {
  return (
    <>
      <div className="card">
        <img src={img} />
        <div className="paragraphs">
          <h1>{name}</h1>
          <p>POPULATION: {population}</p>
          <p>REGION:{region}</p>
          <p>CAPITAL:{capital}</p>
        </div>
      </div>
    </>
  );
}
