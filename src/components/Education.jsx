import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";

export default function Education({ onSave, onInputChange }) {
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      schoolAddress: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);

  function handleEducationChange(event, index) {
    const { name, value } = event.target;
    const updatedEducation = { ...education[index], [name]: value };
    const updatedEducations = [...education];
    updatedEducations[index] = updatedEducation;
    setEducation(updatedEducations);
    setIsEdited(true);
  }

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function toggleAddNew() {
    setIsAddNewVisible(!isAddNewVisible); // Show "Add New" button
  }

  const handleSave = (index) => {
    onSave(education[index]); // Pass the specific education object to onSave
    setIsEdited(false);
    console.log(education);
  };

  const addNewBtnHidden = () => {
    const addBtn = document.querySelector("#addNewEducation");
    addBtn.classList.add("hide");
  };

  const addNewBtnVisible = () => {
    const addBtn = document.querySelector("#addNewEducation");
    addBtn.classList.remove("hide");
  };

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
        <button id="addNewEducation" className="addNew" onClick={toggleAddNew}>
          Add New
        </button>
      )}
      {isAddNewVisible &&
        addNewBtnHidden &&
        education.map((education, index) => (
          <div key={index} className="education-entry">
            <div className="inputContainer">
              <label htmlFor={`school_${index}`}>School</label>
              <input
                type="text"
                name={`school`}
                id={`school_${index}`}
                onChange={(e) => handleEducationChange(e, index)}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor={`degree_${index}`}>Degree</label>
              <input
                type="text"
                name={`degree`}
                id={`degree_${index}`}
                onChange={(e) => handleEducationChange(e, index)}
              />
            </div>

            <div className="inputContainer">
              <label htmlFor={`schoolAddress_${index}`}>Address</label>
              <input
                type="text"
                name={`schoolAddress`}
                id={`schoolAddress_${index}`}
                onChange={(e) => handleEducationChange(e, index)}
              />
            </div>

            <div className="inputContainer">
              <label htmlFor={`startDate_${index}`}>Start Date</label>
              <input
                type="date"
                name={`startDate`}
                id={`startDate_${index}`}
                onChange={(e) => handleEducationChange(e, index)}
              />
            </div>

            <div className="inputContainer">
              <label htmlFor={`ednDate_${index}`}>End Date</label>
              <input
                type="date"
                name={`endDate`}
                id={`endDate_${index}`}
                onChange={(e) => handleEducationChange(e, index)}
              />
            </div>

            {isEdited ? (
              <button className="saveCancel" onClick={handleSave(index)}>
                Save
              </button>
            ) : (
              <button className="addNew" onClick={toggleAddNew}>
                Add New
              </button>
            )}
          </div>
        ))}
    </div>
  );
}
