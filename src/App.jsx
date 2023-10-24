import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [isPersonInfoSaved, setPersonIsInfoSaved] = useState(false);
  const [isEducationInfoSaved, setIsEducationInfoSaved] = useState(false);

  const [education, setEducation] = useState([]);

  const [personInfo, setPersonInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handlePersonInfoChange = (newPersonInfo) => {
    setPersonInfo(newPersonInfo);
  };

  const handlePersonSave = (newPersonInfo) => {
    setPersonInfo(newPersonInfo);
    setPersonIsInfoSaved(true);
  };

  const handleEducationInfoChange = (newEducation) => {
    setEducation(newEducation);
  };

  const handleEducationSave = (newEducation) => {
    // Find the index of the education entry to update
    const index = education.findIndex((edu) => edu.id === newEducation.id);

    if (index !== -1) {
      // If the education entry already exists, update it
      const updatedEducations = [...education];
      updatedEducations[index] = newEducation;
      setEducation(updatedEducations);
    } else {
      // If the education entry is new, add it to the array
      setEducation([...education, newEducation]);
    }
    setIsEducationInfoSaved(true);
  };

  return (
    <div id="mainContainer">
      <div id="left-side-container">
        <GeneralInfo
          onSave={
            handlePersonSave // Update the personInfo when saved
          }
          onInputChange={handlePersonInfoChange}
        />
        <Education
          onSave={
            handleEducationSave //Update the Education info when saved
          }
          onInputChange={handleEducationInfoChange}
        />
        <Experience />
      </div>

      <Display
        personInfo={personInfo}
        isPersonInfoSaved={isPersonInfoSaved}
        educations={education}
        isEducationInfoSaved={isEducationInfoSaved}
      />
    </div>
  );
}

export default App;
