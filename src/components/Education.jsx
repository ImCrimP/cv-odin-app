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

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function toggleAddNew() {
    setIsAddingNew(!isAddingNew);
  }

  function handleSave(index) {
    const updatedEducationData = [...educationData];
    updatedEducationData[index] = educationData[index];
    onEducationChange(updatedEducationData);
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

  function handleCancel() {
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
          {isAddingNew && (
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
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>
              <>
                <button className="saveButton" onClick={handleAddNew}>
                  Save
                </button>
                <button className="cancelButton" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            </div>
          )}
          {educationData.map((educationEntry, index) => (
            <div key={index} className="education-entry">
              {/* Input fields for education properties */}
              <div className="buttonContainer"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
