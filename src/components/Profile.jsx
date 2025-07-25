import "../styling/profile.css";
import React, { useState } from "react";

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const changeHandler = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="profile-container">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          className="profile-input"
          placeholder="Enter name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => changeHandler(e, "name")}
        />
      </div>

      <div>
        <label htmlFor="age">Age: </label>
        <input
          className="profile-input"
          placeholder="Enter age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => changeHandler(e, "age")}
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          className="profile-input"
          placeholder="Enter email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => changeHandler(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;
