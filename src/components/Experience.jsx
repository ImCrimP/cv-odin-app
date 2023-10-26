import "../App.css";
import { useState } from "react";
import dropDownLogo from "../assets/dropdown.svg";
import Display from "./Display";
import { update } from "lodash";

export default function Experience(props) {
  const { experienceData, onHandleExperienceData } = props;

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    companyAddress: "",
    experienceStartDate: "",
    experienceEndDate: "",
    description: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedExperiences, setSavedExperiences] = useState([]);
  const [originalExperience, setOriginalExperience] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);

  /*
  function handleExperienceChange(event) {
    const { name, value } = event.target;
    const newExperience = { ...newExperience, [name]: value };
    setNewExperience(newExperience);
    console.log(newExperience);
  }
  */

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function toggleAddNew() {
    setIsAddingNew(!isAddingNew); // Show "Add New" button
  }

  function handleSave() {
    /*
    const updatedExperienceData = [...experienceData, newExperience];
    onHandleExperienceData(updatedExperienceData);
    setSavedExperiences([...savedExperiences, newExperience]); // Store the saved education info
    setNewExperience({
      company: "",
      position: "",
      companyAddress: "",
      experienceStartDate: "",
      experienceEndDate: "",
      description: "",
    });
    toggleAddNew();
    */
    if (editingIndex !== null) {
      // Editing an existing experience
      const updatedExperiences = [...savedExperiences];
      updatedExperiences[editingIndex] = newExperience;
      setSavedExperiences(updatedExperiences);
      setEditingIndex(null);
    } else {
      // Adding a new experience
      const updatedExperienceData = [...experienceData, newExperience];
      onHandleExperienceData(updatedExperienceData);
      setSavedExperiences([...savedExperiences, newExperience]);
    }

    setNewExperience({
      company: "",
      position: "",
      companyAddress: "",
      experienceStartDate: "",
      experienceEndDate: "",
      description: "",
    });

    setIsAddingNew(false);
  }

  function handleAddNew() {
    const updatatedExperienceData = [...experienceData, newExperience];
    onHandleExperienceData(updatatedExperienceData);
    setNewExperience({
      company: "",
      position: "",
      companyAddress: "",
      experienceStartDate: "",
      experienceEndDate: "",
      description: "",
    });
    toggleAddNew();
  }

  function handleDelete(index) {
    const updatedSavedExperiences = [...savedExperiences];
    updatedSavedExperiences.splice(index, 1);
    setSavedExperiences(updatedSavedExperiences);
  }

  function handleEdit(index) {
    /*
    // Retrieve the experience entry to be edited
    const experienceToEdit = savedExperiences[index];
    setEditingIndex(index);
    setOriginalExperience(experienceToEdit);
    // Set the form fields with the values from the selected experience entry
    setNewExperience({
      company: experienceToEdit.company,
      position: experienceToEdit.position,
      companyAddress: experienceToEdit.companyAddress,
      experienceStartDate: experienceToEdit.experienceStartDate,
      experienceEndDate: experienceToEdit.experienceEndDate,
      description: experienceToEdit.description,
    });

    // Remove the selected experience entry from the savedExperience array
    const updatedSavedExperiences = [...savedExperiences];
    updatedSavedExperiences.splice(index, 1);
    setSavedExperiences(updatedSavedExperiences);

    // Set the 'isAddingNew' state to true to switch to edit mode
    setIsAddingNew(false);
    */
    const experienceToEdit = savedExperiences[index];
    setOriginalExperience(experienceToEdit);
    setNewExperience({ ...experienceToEdit });
    setEditingIndex(index);
    setIsAddingNew(true);

    props.onEdit(updatedExperienceData);
  }

  function handleCancel() {
    if (editingIndex !== null) {
      // Restoring the original experience
      const updatedExperiences = [...savedExperiences];
      updatedExperiences[editingIndex] = originalExperience;
      setSavedExperiences(updatedExperiences);
      setEditingIndex(null);
    }

    setEditingIndex(null);
    setOriginalExperience(null);
    setNewExperience({
      company: "",
      position: "",
      companyAddress: "",
      experienceStartDate: "",
      experienceEndDate: "",
      description: "",
    });
    setIsAddingNew(false);
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
        <div className="experience-entry">
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
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={newExperience.company}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      company: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="position">Position Title</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={newExperience.position}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      position: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="companyAddress">Address</label>
                <input
                  type="text"
                  name="companyAddress"
                  id="companyAddress"
                  value={newExperience.companyAddress}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      companyAddress: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="experienceStartDate">Start Date</label>
                <input
                  type="date"
                  name="experienceStartDate"
                  id="experienceStartDate"
                  value={newExperience.experienceStartDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      experienceStartDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="experienceEndDate">End Date</label>
                <input
                  type="date"
                  name="experienceEndDate"
                  id="experienceEndDate"
                  value={newExperience.experienceEndDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      experienceEndDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="inputContainer">
                {" "}
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  value={newExperience.description}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      description: e.target.value,
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
              {savedExperiences.length > 0 &&
                savedExperiences.map((savedExperiences, index) => (
                  <div
                    key={index}
                    id={`education-summary${index}`}
                    className="education-summary"
                  >
                    <p>{savedExperiences.company}</p>
                    <p>{savedExperiences.position}</p>
                    <p>{savedExperiences.companyAddress}</p>
                    <p>{savedExperiences.experienceStartDate}</p>
                    <p>{savedExperiences.experienceEndDate}</p>
                    <p>{savedExperiences.description}</p>
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
