import "../App.css";
import { useState } from "react";

export default function GeneralInfo() {
  const [personInfo, setPersonInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    const newPersonInfo = { ...personInfo, [name]: value };
    setPersonInfo(newPersonInfo);
    console.log(newPersonInfo);
  }

  return (
    <div id="genInfoContainer" className="sectionContainer">
      <h1 className="header">Personal Info</h1>
      <div className="inputContainer">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          onChange={handleInputChange}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          onChange={handleInputChange}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
