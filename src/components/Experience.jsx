import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";

export default function Experience() {
  const [experience, setExperience] = useState({
    companyAddress: "",
    position: "",
    address: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    const newExperience = { ...experience, [name]: value };
    setExperience(newExperience);
    console.log(newExperience);
  }

  function toggleExpand() {
    setIsExpanded(!isExpanded);
    setIsAddNewVisible(false); // Reset to hide "Add New" button when collapsing
  }

  function toggleAddNew() {
    setIsAddNewVisible(!isAddNewVisible); // Show "Add New" button
  }

  return (
    <div id="experienceContainer" className="sectionContainer collapsDiv">
      <div className="headerContainer" onClick={toggleExpand}>
        <h1 className="header">Experience</h1>
        <img
          className={`dropdownLogo rotate ${isExpanded ? "expanded" : ""}`}
          src={dropDownLogo}
          alt="dropdown"
        />
      </div>

      {isExpanded && (
        <div>
          {isAddNewVisible ? (
            <div>
              <div className="inputContainer">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="position">Position Title</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="companyAddress">Address</label>
                <input
                  type="text"
                  name="companyAddress"
                  id="companyAddress"
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="inputContainer">
                {" "}
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  onChange={handleExperienceChange}
                />
              </div>

              <div className="saveAndCancelBtns">
                <button className="saveCancel">Save</button>
                <button className="saveCancel" onClick={toggleAddNew}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button className="addNew" onClick={toggleAddNew}>
              Add New
            </button>
          )}
        </div>
      )}
    </div>
  );
}
