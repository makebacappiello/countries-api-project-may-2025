import React from "react";
import { useState } from "react";
import "../App.css";

export default function SavedCountries() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    country: "",
    bio: "",
  });
  function handleChange(e) {
    const { name, value, type } = e.target;
    console.log("Name AND Value HERE:", name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      // this means copy everything that in is prevFormData,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("FORM DaTA", formData);
    setFormData({
      name: "",
      emailAddress: "",
      country: "",
      bio: "",
    });
  }
  return (
    <>
      <div className=" form">
        <h1>MY Saved Countries</h1>
        <h1>My Profile</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
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
          </div>
        </form>
      </div>
    </>
  );
}
