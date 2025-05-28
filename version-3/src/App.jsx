import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail.jsx";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Oops! Error fetching data:", error);
      }
    };

    getApiData();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <ul className="navLinks">
          <li>
            <Link to="/">Where in the world?</Link>
          </li>
          <li>
            <Link to="/SavedCountries">Saved Countries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home apiData={apiData} />} />
        <Route
          path="/SavedCountries"
          element={<SavedCountries apiData={apiData} />}
        />
        <Route
          path="/country-detail/:countryName"
          element={<CountryDetail apiData={apiData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
