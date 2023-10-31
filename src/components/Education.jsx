import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";

export default function Education(props) {
  //const { educationData, onEducationChange } = props;
  const { educationData, onEducationChange } = props;

  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    schoolAddress: "",
    schoolStartDate: "",
    schoolEndDate: "",
  });

  //const [educationData, setEducationData] = useState(initialEducationData);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedEducation, setSavedEducations] = useState([]);
  const [originalEducation, setOriginalEducation] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function toggleAddNew() {
    setIsAddingNew(true); // Indicate that you're adding a new entry
    setEditingIndex(null); // Reset the editing index
  }

  function handleSave() {
    if (editingIndex !== null) {
      // Editing an existing education entry
      const updatedEducationData = [...educationData];
      updatedEducationData[editingIndex] = newEducation;
      onEducationChange(updatedEducationData);

      const updatedSavedEducations = [...savedEducation];
      updatedSavedEducations[editingIndex] = newEducation;
      setSavedEducations(updatedSavedEducations);
    } else {
      // Add a new education entry
      const newEducationEntry = {
        school: newEducation.school,
        degree: newEducation.degree,
        schoolAddress: newEducation.schoolAddress,
        schoolStartDate: newEducation.schoolStartDate,
        schoolEndDate: newEducation.schoolEndDate,
      };

      const updatedEducationData = [...educationData, newEducationEntry];
      onEducationChange(updatedEducationData);
      setSavedEducations([...savedEducation, newEducationEntry]); // Update savedEducation
    }

    // Clear the form fields and exit edit mode
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      schoolStartDate: "",
      schoolEndDate: "",
    });

    setIsAddingNew(false);
  }

  function handleAddNew() {
    /*
    // Create a new education object based on user input
    const newEducationEntry = {
      school: newEducation.school,
      degree: newEducation.degree,
      schoolAddress: newEducation.schoolAddress,
      schoolStartDate: newEducation.schoolStartDate,
      schoolEndDate: newEducation.schoolEndDate,
    };
    console.log(newEducationEntry);

    // Update the education data and saved educations
    const updatedEducationData = [...educationData, newEducationEntry];
    const updatedSavedEducations = [...savedEducation, newEducationEntry];
    console.log("add btn data", updatedEducationData);

    onEducationChange(updatedEducationData);
    setSavedEducations(updatedSavedEducations);

    // Clear the form fields
    setNewEducation({
      school: "",
      degree: "",
      schoolAddress: "",
      schoolStartDate: "",
      schoolEndDate: "",
    });*/
    toggleAddNew();
  }

  /*
  function handleAddNew() {
    const updatedEducationData = [...educationData, newEducation];
    const updatedSavedEducations = [...savedEducation, newEducation];
    console.log("updated education data", newEducation);
    onEducationChange(updatedEducationData);
    setSavedEducations(updatedSavedEducations);

    // Clear the form fields
    setNewEducation({
      school: newEducation.school,
      degree: newEducation.degree,
      schoolAddress: newEducation.schoolAddress,
      schoolStartDate: newEducation.schoolStartDate,
      schoolEndDate: newEducation.schoolEndDate,
    });
    toggleAddNew();
  }*/

  function handleDelete(index) {
    const updatedSavedEducations = [...savedEducation];
    updatedSavedEducations.splice(index, 1);
    setSavedEducations(updatedSavedEducations);

    // Update the educationData and pass it to the parent component
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    onEducationChange(updatedEducationData);
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
      schoolStartDate: educationToEdit.schoolStartDate,
      schoolEndDate: educationToEdit.schoolEndDate,
    });

    // Remove the selected education entry from the savedEducations array
    const updatedSavedEducations = [...savedEducation];
    updatedSavedEducations.splice(index, 1);
    setSavedEducations(updatedSavedEducations);

    // Set the 'isAddingNew' state to true to switch to edit mode
    setIsAddingNew(true);

    /*
    // Retrieve the education entry to be edited
    const educationToEdit = savedEducation[index];
    console.log("Editing education at index", index);
    console.log("Education to edit:", educationToEdit);

    setEditingIndex(index);
    console.log("Editing index set to:", index);

    setOriginalEducation(educationToEdit);
    console.log("Original education set to:", educationToEdit);

    // Set the form fields with the values from the selected education entry
    setNewEducation(educationToEdit);
    //console.log("New education set to:", educationToEdit);

    // Remove the selected education entry from the savedEducations array
    const updatedSavedEducations = [...savedEducation];
    updatedSavedEducations.splice(index, 1);
    const updatedEducationData = [...educationData];
    updatedEducationData[editingIndex] = newEducation;
    onEducationChange(updatedEducationData);
    setEditingIndex(null);
    setSavedEducations(updatedSavedEducations);
    console.log("Saved educations after removal:", updatedSavedEducations);

    // Set the 'isAddingNew' state to true to switch to edit mode
    setIsAddingNew(true);
    console.log("Switching to edit mode");

    // Editing an existing education entry
    */
  }

  /*function handleEdit(index) {
    // Retrieve the education entry to be edited
    const educationToEdit = savedEducation[index];
    setEditingIndex(index);
    setOriginalEducation(educationToEdit);
    // Set the form fields with the values from the selected education entry
    setNewEducation({
      school: educationToEdit.school,
      degree: educationToEdit.degree,
      schoolAddress: educationToEdit.schoolAddress,
      schoolStartDate: educationToEdit.schoolStartDate,
      schoolEndDate: educationToEdit.schoolEndDate,
    });

    //setNewEducation(educationData.index);
    setNewEducation(educationToEdit);

    // Remove the selected education entry from the savedEducations array
    const updatedSavedEducations = [...savedEducation];
    updatedSavedEducations.splice(index, 1);
    setSavedEducations(updatedSavedEducations);

    // Set the 'isAddingNew' state to true to switch to edit mode
    setIsAddingNew(true);
  }*/

  function handleCancel() {
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
              <button className="addNew" onClick={handleAddNew}>
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
