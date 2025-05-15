import React, { useEffect, useState } from "react";
// this imports the ability to use these hooks from the react library into the Dom
import "../App.css";
// this imports the ability to use the file from the App.css
import CountryCardList from "../components/CountryCardList.jsx";
// this imports files from the components folder called CountryCardList

export default function Home() {
  // line 8 exports the value to be imported by other pages
  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    // line 10 is a const that useState their original state changes when certain conditions are met then the original value is reset;

    // line 11 says the constant getApi Data is a function that will be a synchronised set of steps  as follows in the function.
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.error("Oops! Error fetching data:", error);
    }
  };
  // the steps followed are to fetch the api data on line 16 and await a response then convert the data to.json also this is when the constant setApiData will be reset from data if there is an error it will be detected and displayed .
  useEffect(() => {
    getApiData();
  }, []);
  // line 25-27 the useEffect hook fetches the api data
  return (
    // line 30 holds the jsx code that is shown in the ui
    <>
      <CountryCardList data={apiData} />
      {/* on line 33 this CountrycardList is a component ie a child that gad been creasted in a separate file and imported into this parent card for rendering. */}
    </>
  );
}
