import React, { useEffect, useState } from "react";
// import localData from "/localData.js";
import "../App.css";
import CountryCardList from "../components/CountryCardList.jsx";

export default function Home() {
  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.error("Oops! Error fetching data:", error);
    }
  };

  // const whereInWorld = "Where in the world?";

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <CountryCardList data={apiData} />
    </>
  );
}
