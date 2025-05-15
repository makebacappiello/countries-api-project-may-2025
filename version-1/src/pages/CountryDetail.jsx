import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function CountryDetail(
  {
    //   key,
    //   name,
    //   population,
    //   region,
    //   capital,
    //   img,
  }
) {
  return (
    <Link to={`country-detail/${item.name.common}`}>
      <div className="card">
        <h1>Country Detail</h1>
        {/* <img src={img} />
      <p>COUNTRY: {name}</p>
      <p>POPULATION: {population}</p>
      <p>REGION:{region}</p>
      <p>CAPITAL:{capital}</p>
    </div> */}
      </div>
    </Link>
  );
}
