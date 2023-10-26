import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [generalInfoData, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationData, setEducationData] = useState([
    {
      school: "",
      degree: "",
      schoolAddress: "",
      schoolStartDate: "",
      schoolEndDate: "",
    },
  ]);
  /*  
  
*/

  const [experienceData, setExperienceData] = useState([
    {
      company: "",
      position: "",
      companyAddress: "",
      experienceStartDate: "",
      experienceEndDate: "",
      description: "",
    },
  ]);
  /*  
  
    */

  const handleGeneralInfoSubmit = (data) => {
    console.log("submitted data in app", data);
    setGeneralInfo(data);
  };

  const handleEducationChange = (data) => {
    setEducationData(data);
  };

  const handleExperienceData = (data) => {
    setExperienceData(data);
  };

  const updateEducationDate = (updatedData) => {
    setEducationData(updatedData);
  };

  const updatedExperienceData = (updatedData) => {
    setExperienceData(updatedData);
  };

  return (
    <div id="mainContainer">
      <div id="left-side-container">
        <GeneralInfo
          data={generalInfoData}
          onSubmit={handleGeneralInfoSubmit}
        />
        <Education
          educationData={educationData}
          onEducationChange={handleEducationChange}
        />
        <Experience
          experienceData={experienceData}
          onHandleExperienceData={handleExperienceData}
        />
      </div>

      <Display
        data={generalInfoData}
        educationData={educationData}
        experienceData={experienceData}
      />
    </div>
  );
}

export default App;
