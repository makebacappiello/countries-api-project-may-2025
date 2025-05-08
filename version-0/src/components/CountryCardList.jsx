import React from "react";
import "../App.css";
import CountryCard from "./CountryCard";

export default function CountryCardList({ localData }) {
  return (
    <>
      <div className="allCards">
        {localData.map((item) => {
          return (
            <div className="cardDetail">
              <CountryCard
                key={item.cca3}
                img={item.flags.png}
                name={item.name.official}
                population={item.population}
                region={item.region}
                capital={item.capital?.[0] || "N/A"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
