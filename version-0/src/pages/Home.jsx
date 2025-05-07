import React from "react";
import localData from "/localData.js";
import "../App.css";
import CountryCardList from "../components/CountryCardList.jsx";

export default function Home() {
  // const whereInWorld = "Where in the world?";
  console.log(localData);
  return (
    <>
      <CountryCardList />
    </>
  );
}
