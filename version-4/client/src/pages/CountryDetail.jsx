import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// the functioon below declares a React functional component that receives apiData as a prop (a list of country objects).

export default function CountryDetail({ apiData }) {
  // the const below destructures countryName from the URL using useParams().

  const { countryName } = useParams();

  // the console logs the extracted country name to the console (for debugging).

  console.log(countryName, "Country Name");

  // the const viewCount creates local state to track how many times this country's detail page has been viewed starting with 0 in its original state

  const [viewCount, setViewCount] = useState(0);

  // this is an async function to update and retrieve the viewCount from the backend

  const updateViewCount = async () => {
    // the constant response is used to send a POST request to backend to update the view count.

    const response = await fetch("/api/update-one-country-count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: countryName,
      }),
    });

    // The request sends JSON with the current countryName to be updated

    const countryCountData = await response.json();
    // the console log logs the countryCountData to be tested.
    // and parses the JSON response.

    console.log(countryCountData.newCount, "New Count");

    // this updates the state viewCount

    setViewCount(countryCountData.newCount);
  };

  const country = apiData.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  // Runs when the component mounts or when countryview changes.

  useEffect(() => {
    // If a valid country is found, calls updateViewCount.

    if (!country) return;
    updateViewCount();
  }, [country]);

  if (!country) {
    // If country is not found, returns a loading message.

    return (
      <div className="country-detail">
        <p>Loading Country Data...Possibility of Apples and Rain...</p>;
      </div>
    );
  }

  function countrySave() {
    const saveCountryToDataBase = async () => {
      try {
        const response = await fetch("/api/save-one-country", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country_name: countryName,
          }),
        });
        const text = await response.text();
        // use .text instead of .json()
        if (!response.ok) {
          // if country was already saved or error occurred
          alert("Failed to save country" + text);
          return;
        }
        console.log("SAVED TO BACKEND:", text);
        alert("Country saved successfully!");
      } catch (error) {
        console.error("Save failed:", error.message);
        alert("Something went wrong while saving. ");
      }
    };
    saveCountryToDataBase();
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
                  {/* Shows how many times this country has been viewed (with plural "s" when needed). */}
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
