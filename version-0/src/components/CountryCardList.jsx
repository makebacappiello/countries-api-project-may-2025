import React from "react";
import "../App.css";
import CountryCard from "./CountryCard";

export default function CountryCardList({ data }) {
  console.log("DATA", data);
  return (
    <>
      <div className="allCards">
        {data.map((item) => {
          return (
            <div key={item.cca3} className="cardDetail">
              <CountryCard
                img={item.flags.png}
                name={item.name.common}
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
