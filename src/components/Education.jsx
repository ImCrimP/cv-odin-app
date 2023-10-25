import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";

export default function Education(props) {
  const { educationData, onEducationChange } = props;

  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    schoolAddress: "",
    startDate: "",
    endDate: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedEducation, setSavedEducations] = useState([]);
  const [originalEducation, setOriginalEducation] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function toggleAddNew() {
    setIsAddingNew(!isAddingNew);
  }

  function handleSave() {
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

  function handleEdit(index) {
    // Retrieve the education entry to be edited
    const educationToEdit = savedEducation[index];
    setEditingIndex(index);
    setOriginalEducation(educationToEdit);
    // Set the form fields with the values from the selected education entry
    setNewEducation({
      school: educationToEdit.school,
      degree: educationToEdit.degree,
      schoolAddress: educationToEdit.schoolAddress,
      startDate: educationToEdit.startDate,
      endDate: educationToEdit.endDate,
    });

    // Remove the selected education entry from the savedEducations array
    const updatedSavedEducations = [...savedEducation];
    updatedSavedEducations.splice(index, 1);
    setSavedEducations(updatedSavedEducations);

    // Set the 'isAddingNew' state to true to switch to edit mode
    setIsAddingNew(true);
  }

  function handleCancel() {
    /*
    const educationToEdit = savedEducation[index];
    setNewEducation({
      
      school: "",
      degree: "",
      schoolAddress: "",
      startDate: "",
      endDate: "",
     
      school: educationToEdit.school,
      degree: educationToEdit.degree,
      schoolAddress: educationToEdit.schoolAddress,
      startDate: educationToEdit.startDate,
      endDate: educationToEdit.endDate,
    });
    setIsAddingNew(false);
     */

    if (editingIndex !== null) {
      const updatedEducations = [...savedEducation];
      updatedEducations[editingIndex] = originalEducation;
      setSavedEducations(updatedEducations);
    }

    // Clear the form fields and exit edit mode
    setEditingIndex(null);
    setOriginalEducation(null);
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
                    <p>{savedEducation.school}</p>
                    <p>{savedEducation.degree}</p>
                    <p>{savedEducation.schoolAddress}</p>
                    <p>{savedEducation.startDate}</p>
                    <p>{savedEducation.endDate}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
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
