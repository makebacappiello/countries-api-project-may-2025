import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CountryDetail({ apiData }) {
  const { countryName } = useParams();
  const country = apiData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLocaleLowerCase()
  );
  if (!country) return;
  <p>Loading Country Data...Possibility of Apples and Rain...</p>;
  return (
    <Link to={`country-detail/${item.name.common}`}>
      <div className="card">
        <h1>Country Detail</h1>
        <img src={img} />
        <p>COUNTRY: {name}</p>
        <p>POPULATION: {population}</p>
        <p>REGION:{region}</p>
        <p>CAPITAL:{capital}</p>
      </div>
    </Link>
  );
}
