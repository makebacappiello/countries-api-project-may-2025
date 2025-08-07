import React from "react";
// required for JSX to work (eg: <div>, <form> )
import { useState, useEffect } from "react";
// React hooks used for managing components and side effects like on Load...do this or that
import "../App.css";
// necessary for page styling
import CountryCard from "../components/CountryCard";
// A reusable component to render country data.

// ____________________________________FORM DATA___________________________________________

// The export default function component defines the component called SavedCountries which can be reused by my App.

export default function SavedCountries({ apiData }) {
  // formData holds the values for each input field in my form
  // setFormData is the function to update formData
  // useState({...}) begins the formData with empty strings.
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    country: "",
    bio: "",
  });
  // formData manages form input values and its original state is an empty string. see Controlled Components from React Docs for reference

  const [storedUserInfo, setStoredUserInfo] = useState(null);

  // storedUserInfo is a state that holds the parsed version of the form data ie held from localStorage with a value of  null meaning there is no initial value yet.

  const [isSubmitted, setIsSubmitted] = useState(false);
  // this useState hook tracks whether the user has submitted the form

  function handleChange(e) {
    const { name, value } = e.target;

    // e.target this is the input that triggered the event
    // {name,value}: destructures the name and value from the input.eg name:(emailaddress), value:(rasin@UNSAFE_getTurboStreamSingleFetchDataStrategy.com)
    // basically it updates form fields based on name.
    // https://reactjs.org/docs/handling-events.html

    console.log("Name AND Value HERE:", name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      // this means copy everything that in is prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    // this function stops the page from refreshing when the form is submitted

    event.preventDefault();
    // prevents the form from reloading the page
    console.log("FORM DaTA", formData);

    const userInfo = async () => {
      try {
        // the constant response is used to send a POST request to backend to update the userInfo.

        const response = await fetch("/api/add-one-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            country_name: formData.country,
            email: formData.emailAddress,
            bio: formData.bio,
          }),
        });
        console.log(response, "FETCH USER INFO RESPONSE");
        setIsSubmitted(true);
        // this changes the state of submitted to true

        // the code below resets the form to blank
        setFormData({
          name: "",
          emailAddress: "",
          country: "",
          bio: "",
        });
      } catch (error) {
        console.error("Error submitting user info:", error);
      }
    };
    userInfo();
    // console.log(userInfo)
    // calling the async function.
  }

  // useEffect runs once when the component first loads ([]) dependancy array)
  useEffect(() => {
    const getNewestUser = async () => {
      try {
        const response = await fetch("/api/get-newest-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const newestUserData = data[0];
          // get the first object from the Array

          setStoredUserInfo(newestUserData);
          setFormData({
            name: newestUserData.name,
            emailAddress: newestUserData.email || "",
            country: newestUserData.country_name || "",
            bio: newestUserData.bio || "",
          });
          setIsSubmitted(true);
          console.log(newestUserData, "THIS IS THE NEWEST USER YAY!");
        }
      } catch (error) {
        console.error("Error returning newest user:", error);
      }
    };
    getNewestUser();
  }, []);

  console.log(formData.name);

  async function handleUnsaveOneCountry(countryName) {
    const unsaveOneCountry = async () => {
      const response = await fetch("/api/unsave-one-country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country_name: countryName,
        }),
      });
      const deletedData = await response.text();
      console.log(deletedData, "TESTING DELETED DATA");
    };
    await unsaveOneCountry();
  }
  async function handleUnsaveAllCountries() {
    const unsaveAllCountries = async () => {
      const response = await fetch("/api/unsave-all-saved-countries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const deletedCountries = await response.text();
      console.log(
        deletedCountries,
        "THERE HAS BEEN A DELETION ON ALL COUNTRIES!"
      );
    };
    await unsaveAllCountries();
  }

  // ___________________________________________SAVED COUNTRIES __________________________________________

  // this gets the full information filled card from the restAPI

  const [isLoading, setIsLoading] = useState(true);
  // in the event if the savedCountries array is empty(no countries saved)this state may not necessarily be loading so to validate this message I added this state in boolean form

  const [savedCountries, setSavedCountries] = useState([]);
  //  this const holds an array of saved country objects

  // function filteredCountryByCommonName(filteredCountry){
  // const [searchNames, setSearchNames] useState =('[]');
  const restCountryArray = apiData;
  // console.log(restCountryArray, "ORIGINAL CARDS");

  // inputs: info from savedCountryData,
  // [
  //   {
  //     "country_name": "Japan"
  //   },
  //   {
  //     "country_name": "Germany"
  //   }
  // ]
  // info from the apiData
  // an array of objects
  //

  // first filter apiData using the fields from savedCountryData ie country_name

  // the filtered constant holds the list of countries from my API data (restCountryArray) that match something from saved countries

  const filteredCountries = restCountryArray.filter(
    (country) =>
      //  if the commonName from apiData matches any item from savedCountryData then it is filtered using the .filter.

      // the (country) function runs once for each country
      // if the function returns true,the country stays on the list. if false its removed above.
      // outputs: filtered information from the apiData
      // also an array of objects

      // for the savedCountries.some((saved) =>...)

      // For each country from the API, we want to check: "Is this country saved by the user?"
      // .some goes through the savedCountries array from the backend/API.
      // It checks if at least one saved country object (saved) matches the current country being filtered

      savedCountries.some(
        (saved) => saved.country_name === country.name?.common
      )
    // this is the actual comparison line above here
  );
  console.log(filteredCountries, "FILTERED COUNTRIES");
  // console.log(savedCountries.some(saved), "SAVED COUNTRIES");NOT WORKING!! ERROR!!!

  // THIS async function fetches and updates the saved countries below
  const updateSavedCountries = async () => {
    console.log("Running updateSavedCountries...");
    try {
      const response = await fetch("/api/get-all-saved-countries", {
        method: "GET",
      });

      if (response.ok) {
        const savedCountryData = await response.json();
        console.log(
          "FULL API RESPONSE ",
          savedCountryData,
          "SAVED COUNTRY DATA"
        );
        console.log(Array.isArray(savedCountryData));
        // the array.isarray log is used for debugging to see if api call is returning an array of country objects.should log as true
        setSavedCountries(savedCountryData);
        // sets the fetched data here
      } else {
        console.error("Invalid savedCountries data");
      }
    } catch (error) {
      console.error("Error fetching saved countries:", error);
    } finally {
      setIsLoading(false);
      // this line is used to mark loading as complete
    }
  };

  useEffect(() => {
    console.log("Updated saved countries ");
    // fetch saved countries when the component mounts
    updateSavedCountries();
  }, []);
  // the useEffect above also runs on mount (first run ) when savedCountries updates
  useEffect(() => {
    if (!savedCountries || savedCountries.length === 0) return;

    // Logic that will happen when savedCountries changes
    console.log(savedCountries, "Updated saved countries");
  }, [savedCountries]);
  //  effect runs when saved countries  changes this is conditional rendering for loading
  if (!savedCountries.length) {
    return <div>Loading...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("savedCountries card", savedCountries);

  // ________________________________________THE UI RETURN__________________________________________________

  return (
    // EVERYTHING shown in the UI goes here
    <>
      <div className="saved-page">
        <h1>MY Saved Countries</h1>
        {filteredCountries.length > 0 ? (
          // this means filter so as to only show countries with valid name...then map below

          <div className="allCards">
            {filteredCountries.map((country, index) => (
              <div key={index} className="country-card-wrapper">
                <CountryCard
                  img={country.flags?.svg || country.flags?.png}
                  name={country.name?.common}
                  population={country.population || "unknown"}
                  region={country.region || "unknown"}
                  capital={country.capital?.[0] || "N/A"}
                  borders={country.borders}
                />
                <button
                  onClick={() => handleUnsaveOneCountry(country.name?.common)}
                >
                  Delete
                </button>
              </div>
            ))}
            <div>
              {/* delete button */}

              <button onClick={() => handleUnsaveAllCountries()}>
                Delete All
              </button>
            </div>
          </div>
        ) : (
          <p>No Country Saved Yet!</p>
        )}
      </div>
      {/* displays a list of CountryCard components */}
      {/* Uses optional chaining ( capital.[0]) for safety. */}

      <div className=" form">
        <h1>My Profile</h1>
        {/* Display headers for UI */}
        {formData.name && <h2>Welcome back, {formData.name}! </h2>}
        {/* The code above shows greeting if form was submitted and info exists */}
        {/* Renders form inputs with value ond onChange  */}

        <form className="form" onSubmit={handleSubmit}>
          {/* submitting the form runs the handleSubmit */}

          <div>
            <label htmlFor="name">Full Name</label>

            {/* each input field is controlled ( its value is linked to formData) */}
            {/* name: Matches the key in formData. */}
            {/* value: the current value from state. */}
            {/* onChange: triggers handleChange() */}
            {/* the same logic applies to email, country and bio  */}
            <input
              className="userName"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="emailAddress"> Email</label>
            <input
              className="userEmail"
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              className="userCountry"
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              className="userBio"
              rows="8"
              cols="50"
              type="text"
              name="bio"
              id="bio"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="button" type="submit">
              Submit
            </button>
            {/* the submit button */}
          </div>
        </form>
        {/* if saved data is available, show it below the form. */}
        {/* This uses the parsed object to access and render each field. */}

        {storedUserInfo && (
          <div className="saved-info">
            <h2>Saved Profile Info</h2>
            <div className="info-group">
              <label>Name</label>
              <p>Name: {storedUserInfo.name}</p>
            </div>
            <div className="info-group">
              <label>Email</label>
              <p>Email:{storedUserInfo.email}</p>
            </div>
            <div className="info-group">
              <label>Country</label>
              <p>Country:{storedUserInfo.country_name}</p>
            </div>
            <div className="info-group">
              <label>Bio</label>
              <p>Biography:{storedUserInfo.bio}</p>
            </div>
          </div>
          // this displays saved profile information
        )}
      </div>
    </>
  );
}
