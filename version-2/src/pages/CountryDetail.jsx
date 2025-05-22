import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CountryDetail({ apiData }) {
  const { countryName } = useParams();
  console.log(countryName);
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
      <Link to="/">
        <div className="card country-detail-card">
          <button className="back-button">&larr; Back</button>

          <img
            className="country-detail-flag"
            src={country.flags.png}
            alt={`${country.name.common} flag`}
          />
          <button className="save-button">Save</button>
          <div className="country-detail-text">
            <h2>{country.name.common}</h2>
            <div className="detail-columns">
              <div className="column">
                <p>POPULATION: {country.population.toLocaleString()}</p>
                <p>REGION:{country.region}</p>
                <p>CAPITAL:{country.capital?.[0] || "No Capital Found"}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
