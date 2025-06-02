import React from "react";
// required for JSX to work (eg: <div>, <form> )
import { useState, useEffect } from "react";
// React hooks used for managing components and side effects like on Load...do this or that
import "../App.css";
// necessary for page styling
import CountryCard from "../components/CountryCard";
// A reusable component to render country data.

// The export default function component defines the component called SavedCountries which can be reused by my App.

export default function SavedCountries() {
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
    console.log("FORM DaTA", formData);

    const userInfoString = JSON.stringify(formData);

    // the const userInfoString represents the conversion of formData into a string and stores the string in the browser's localStorage using the key "userinfo" below

    localStorage.setItem("userInfo", userInfoString);

    // console.log(userInfoString, "USER INFO StrinGSSS");

    setStoredUserInfo(formData);

    // setStoredUserInfo(userInfoString)updates the state so that it can be displayed later on the form

    setIsSubmitted(true);
    // this changes the state of submitted to true

    // the code below resets the form to blank
    setFormData({
      name: "",
      emailAddress: "",
      country: "",
      bio: "",
    });
  }

  // useEffect runs once when the component first loads ([]) dependancy array)
  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    // get the data from local Storage;

    setStoredUserInfo(userInfoString);

    // set the data as storedUserInfo

    if (userInfoString) {
      try {
        const parsedUserInfo = JSON.parse(userInfoString);
        setStoredUserInfo(parsedUserInfo);
        // parses the data
        setFormData(parsedUserInfo);
        // updates the data here
        setIsSubmitted(true);
        // console.log(parsedUserInfo, "STORED USER INFO");
      } catch (error) {
        console.error("Error parsing user info:", error);
      }
    }
  }, []);

  console.log(formData.name);

  const [isLoading, setIsLoading] = useState(true);
  // in the event if the savedCountries array is empty(no countries saved)this state may not necessarily be loading so to validate this message I added this state in boolean form

  const [savedCountries, setSavedCountries] = useState([]);
  //  this const holds an array of saved country objects

  // THIS async function fetches and updates the saved countries below
  const updateSavedCountries = async () => {
    try {
      const response = await fetch("/api/get-all-saved-countries", {
        method: "GET",
      });

      if (response.ok) {
        const savedCountryData = await response.json();
        console.log(savedCountryData, "SAVED COUNTRY DATA");
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
  if (isLoading) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
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

  return (
    // EVERYTHING shown in the UI goes here
    <>
      <div className="saved-page">
        <h1>MY Saved Countries</h1>
        {savedCountries.length > 0 ? (
          <div className="allCards">
            {savedCountries.map((country, index) => (
              <CountryCard
                key={index}
                img={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0] || "N/A"}
                borders={country.borders}
                // country={country}
              />
            ))}
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
        {isSubmitted && storedUserInfo && (
          <h2>Welcome back, {storedUserInfo.name}! </h2>
        )}
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
              <p>Email:{storedUserInfo.emailAddress}</p>
            </div>
            <div className="info-group">
              <label>Country</label>
              <p>Country:{storedUserInfo.country}</p>
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
