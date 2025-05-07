import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail.jsx";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Where in the world?</Link>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <Link to="/SavedCountries">Saved Countries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SavedCountries" element={<SavedCountries />} />
        <Route path="/CountryDetail" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
