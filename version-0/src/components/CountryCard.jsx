import React from "react";
import CountryCardList from "./CountryDetail";
import "../App.css";

export default function CountryCard() {
  return (
    <>
      <div className="card">
        <CountryCardList />
        {localData.map((item) => {
          return (
            <div className="cardDetail">
              <CountryCardList
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
