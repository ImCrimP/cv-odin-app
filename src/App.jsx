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

  const [educationData, setEducationData] = useState([]);

  const [experienceData, setExperienceData] = useState([]);

  const handleGeneralInfoSubmit = (data) => {
    console.log("submitted personal info", data);
    setGeneralInfo(data);
    console.log("genral info data in app.jsx", generalInfoData);
  };

  const handleEducationChange = (data) => {
    console.log("submitted education", data);
    setEducationData(data);
  };

  const handleExperienceData = (data) => {
    console.log("submitted experience", data);
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
        name={generalInfoData.name}
        email={generalInfoData.email}
        phone={generalInfoData.phone}
        address={generalInfoData.address}
        educationData={educationData}
        experienceData={experienceData}
      />
    </div>
  );
}

export default App;
