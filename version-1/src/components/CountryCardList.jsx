import React from "react";
import "../App.css";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

export default function CountryCardList({ data }) {
  console.log("DATA", data);
  return (
    <>
      <div className="allCards">
        {data.map((item) => {
          return (
            <Link to={`/country-detail/${item.name.common}`}>
              <div key={item.cca3} className="cardDetail">
                <CountryCard
                  img={item.flags.png}
                  name={item.name.common}
                  population={item.population}
                  region={item.region}
                  capital={item.capital?.[0] || "N/A"}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
