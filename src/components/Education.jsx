import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";

export default function Education(props) {
  //const { educationData, onEducationChange } = props;
  const { educationData: initialEducationData, onEducationChange } = props;

  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    schoolAddress: "",
    schoolStartDate: "",
    schoolEndDate: "",
  });

  const [educationData, setEducationData] = useState(initialEducationData);

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
    if (editingIndex !== null) {
      // Editing an existing education entry
      const updatedEducationData = [...educationData];
      updatedEducationData[editingIndex] = newEducation;
      onEducationChange(updatedEducationData);
      setEditingIndex(null);
    } else {
      // Adding a new education entry
      const updatedEducationData = [...educationData, newEducation];
      onEducationChange(updatedEducationData);
    }

    const updatedData = {
      school: school.value,
      degree: degree.value,
      schoolAddress: schoolAddress.value,
      schoolStartDate: schoolStartDate.value,
      schoolEndDate: schoolEndDate.value,
    };
    console.log("updated data", updatedData);
    props.onEducationChange(savedEducation);
    console.log("props", props);
    const updatedEducationData = [...educationData, newEducation];
    onEducationChange(updatedEducationData);
    setSavedEducations([...savedEducation, newEducation]); // Store the saved education info
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      schoolStartDate: "",
      schoolEndDate: "",
    });
    setEducationData(updatedEducationData);
    toggleAddNew();
  }

  function handleAddNew() {
    const updatedEducationData = [...educationData, newEducation];
    setEducationData(updatedEducationData);
    onEducationChange(updatedEducationData);
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      schoolStartDate: "",
      schoolEndDate: "",
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
    /*setNewEducation({
      school: educationToEdit.school,
      degree: educationToEdit.degree,
      schoolAddress: educationToEdit.schoolAddress,
      schoolStartDate: educationToEdit.schoolStartDate,
      schoolEndDate: educationToEdit.schoolEndDate,
    });*/
    setNewEducation(educationData.index);

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
      schoolStartDate: "",
      schoolEndDate: "",
     
      school: educationToEdit.school,
      degree: educationToEdit.degree,
      schoolAddress: educationToEdit.schoolAddress,
      schoolStartDate: educationToEdit.schoolStartDate,
      schoolEndDate: educationToEdit.schoolEndDate,
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
      schoolStartDate: "",
      schoolEndDate: "",
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
                <label htmlFor="schoolStartDate">Start Date</label>
                <input
                  type="date"
                  name="schoolStartDate"
                  id="schoolStartDate"
                  value={newEducation.schoolStartDate}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      schoolStartDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="schoolEndDate">End Date</label>
                <input
                  type="date"
                  name="schoolEndDate"
                  id="schoolEndDate"
                  value={newEducation.schoolEndDate}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      schoolEndDate: e.target.value,
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
                    <p>{savedEducation.schoolStartDate}</p>
                    <p>{savedEducation.schoolEndDate}</p>
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
