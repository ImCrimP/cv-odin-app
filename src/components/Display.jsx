import "../App.css";
import useState from "react";
import App from "../App";

export default function Display(props) {
  const { name, email, phone, address, educationData, experienceData } = props;

  console.log(name, email, phone, address);

  return (
    <div id="display">
      <div id="personalInfoContainer">
        <h1 id="NameDisplay">{name}</h1>
        <div id="infoNoName">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </div>

      <div id="educationContainer">
        <h1 id="educationDisplay" className="eduExpHeader bold">
          Education
        </h1>
        <div id="educationInfo">
          {educationData && educationData.length > 0 ? (
            educationData.map((education, index) => (
              <div key={index}>
                <p>
                  <b>{education.degree},</b> {education.school}
                </p>
                <p>
                  {education.schoolStartDate} - {education.schoolEndDate}
                </p>
                <p>{education.schoolAddress}</p>
              </div>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </div>
      </div>

      <div id="experienceContainer">
        <h1 id="experienceDisplay" className="eduExpHeader bold">
          Experience
        </h1>
        <div id="experienceInfo">
          {experienceData && experienceData.length > 0 ? (
            experienceData.map((experience, index) => (
              <div key={index}>
                <p>
                  <b>{experience.company},</b> {experience.position}
                </p>
                <p>
                  {experience.experienceStartDate} -{" "}
                  {experience.experienceEndDate}
                </p>
                <p>{experience.companyAddress}</p>
                <p>{experience.description}</p>
              </div>
            ))
          ) : (
            <p>No experience data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
