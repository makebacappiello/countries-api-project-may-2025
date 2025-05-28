import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CountryDetail({ apiData }) {
  const { countryName } = useParams();
  console.log(countryName);

  const [viewCount, setViewCount] = useState(0);
  const updateViewCount = async () => {
    const response = await fetch("/api/update-one-country-count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: countryName,
      }),
    });

    const countryCountData = await response.json();
    console.log(countryCountData.newCount, "New Count");
    setViewCount(countryCountData.newCount);
  };

  const country = apiData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  useEffect(() => {
    if (!country) return;
    updateViewCount();
  }, [country]);

  if (!country) {
    return (
      <div className="country-detail">
        <p>Loading Country Data...Possibility of Apples and Rain...</p>;
      </div>
    );
  }

  function countrySave() {
    let savedCountries = JSON.parse(localStorage.getItem("savedCountries"));
    console.log(savedCountries);
    //  retrieve existing saved countries
    if (!savedCountries) {
      savedCountries = [];
    }

    const alreadySaved = savedCountries.some(
      (item) => item.name.common === country.name.common
    );
    // to avoid saving duplicates
    if (!alreadySaved) {
      const updated = [...savedCountries, country];
      localStorage.setItem("savedCountries", JSON.stringify(updated));
      alert("Country Saved!");
    } else {
      alert("This country is already saved.");
    }
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
          <button className="save-button" onClick={countrySave}>
            Save
          </button>
          <div className="country-detail-text">
            <h2>{country.name.common}</h2>
            <div className="detail-columns">
              <div className="column">
                <p>POPULATION: {country.population.toLocaleString()}</p>
                <p>REGION:{country.region}</p>
                <p>CAPITAL:{country.capital?.[0] || "No Capital Found"}</p>
                <p>
                  VIEWED: {viewCount} time{viewCount !== 1 && "s"}
                </p>
                <p>
                  BORDERS:{""}
                  {country.borders && country.borders.length > 0
                    ? country.borders
                        .map((borderCode) => {
                          const borderCountry = apiData.find(
                            (c) => c.cca3 === borderCode
                          );
                          return borderCode
                            ? borderCountry.name.common
                            : borderCode;
                        })
                        .join(",")
                    : "None"}
                </p>
                {/* this code checks each border code in country.borders, finds the corresponding country in apiData , and displays the name. */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
