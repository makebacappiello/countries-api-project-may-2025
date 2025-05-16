import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CountryDetail({ apiData }) {
  const { countryName } = useParams();
  const country = apiData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );
  if (!country) {
    return (
      <div className="country-detail">
        <p>Loading Country Data...Possibility of Apples and Rain...</p>;
      </div>
    );
  }
  return (
    <div className="country-detail">
      <Link
        to="/"
        // {`country-detail/${country.name.common}`}
      >
        <div className="card">
          <h1>Country Detail</h1>
          <img src={country.flags.png} alt={`${country.name.common} flag`} />
          <h1>COUNTRY:{country.name.common}</h1>
          <p>POPULATION: {country.population.toLocaleString()}</p>
          <p>REGION:{country.region}</p>
          <p>CAPITAL:{country.capital?.[0] || "Not Available"}</p>
        </div>
      </Link>
    </div>
  );
}
