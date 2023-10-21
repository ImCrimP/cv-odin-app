import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";

export default function Education() {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    schoolAddress: "",
    startDate: "",
    endDate: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleEducationChange(event) {
    const { name, value } = event.target;
    const newEducation = { ...education, [name]: value };
    setEducation(newEducation);
    console.log(newEducation);
  }

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div id="educationContainer" className="sectionContainer collapsDiv">
      <div className="headerContainer" onClick={toggleExpand}>
        <h1 className="header">Education</h1>
        <img
          className={`dropdownLogo rotate ${isExpanded ? "expanded" : ""}`}
          src={dropDownLogo}
          alt="dropdown"
        />
      </div>

      {isExpanded && (
        <div>
          <div className="inputContainer">
            <label htmlFor="school">School</label>
            <input
              type="text"
              name="school"
              id="school"
              onChange={handleEducationChange}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              onChange={handleEducationChange}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="schoolAddress">Address</label>
            <input
              type="text"
              name="schoolAddress"
              id="schoolAddress"
              onChange={handleEducationChange}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={handleEducationChange}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              onChange={handleEducationChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
