import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";

export default function Education(props) {
  const { educationData, onEducationChange } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    schoolAddress: "",
    startDate: "",
    endDate: "",
  });

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedEducation, setSavedEducations] = useState([]);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function toggleAddNew() {
    setIsAddingNew(!isAddingNew);
  }

  function handleSave(index) {
    /*
    const updatedEducationData = [...educationData];
    updatedEducationData[index] = educationData[index];
    onEducationChange(updatedEducationData);
    */
    const updatedEducationData = [...educationData, newEducation];
    onEducationChange(updatedEducationData);
    setSavedEducations([...savedEducation, newEducation]); // Store the saved education info
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      startDate: "",
      endDate: "",
    });
    toggleAddNew();
  }

  function handleAddNew() {
    const updatedEducationData = [...educationData, newEducation];
    onEducationChange(updatedEducationData);
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      startDate: "",
      endDate: "",
    });
    console.log(updatedEducationData);
    toggleAddNew();
  }

  function handleDelete(index) {
    const updatedSavedEducations = [...savedEducation];
    updatedSavedEducations.splice(index, 1);
    setSavedEducations(updatedSavedEducations);
  }

  function handleCancel() {
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      startDate: "",
      endDate: "",
    });
    setIsAddingNew(false);
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
        <div className="education-entry">
          <div className="buttonContainer">
            {isAddingNew ? null : (
              <button className="addNew" onClick={toggleAddNew}>
                Add New
              </button>
            )}
          </div>
          {isAddingNew ? (
            <div className="inputContainer">
              <div className="inputContainer">
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  value={newEducation.school}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, school: e.target.value })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  value={newEducation.degree}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, degree: e.target.value })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="schoolAddress">Address</label>
                <input
                  type="text"
                  name="schoolAddress"
                  id="schoolAddress"
                  value={newEducation.schoolAddress}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      schoolAddress: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={newEducation.startDate}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      startDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={newEducation.endDate}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <button className="saveButton" onClick={handleSave}>
                  Save
                </button>
                <button className="cancelButton" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="summaryContainer">
              {savedEducation.length > 0 &&
                savedEducation.map((savedEducation, index) => (
                  <div
                    key={index}
                    id={`education-summary${index}`}
                    className="education-summary"
                  >
                    <p>School: {savedEducation.school}</p>
                    <p>Degree: {savedEducation.degree}</p>
                    <p>Address: {savedEducation.schoolAddress}</p>
                    <p>Start Date: {savedEducation.startDate}</p>
                    <p>End Date: {savedEducation.endDate}</p>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
