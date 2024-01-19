import "../App.css";
import useState from "react";
import App from "../App";

export default function Display(props) {
  const { name, email, phone, address, educationData, experienceData } = props;

  console.log(name, email, phone, address);
  console.log(experienceData);

  return (
    <div id="display">
      <div id="personalInfoContainer">
        <h1 id="NameDisplay">{name}</h1>
        <div
          className={`${
            name.length > 0 ||
            email.length > 0 ||
            phone.length > 0 ||
            address.length > 0
              ? "infoNoName"
              : ""
          }`}
        >
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </div>

      <div id="educationContainer">
        {educationData.length > 0 ? (
          <h2 id="educationDisplay" className="eduExpHeader bold">
            Education
          </h2>
        ) : (
          <p></p>
        )}
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
            <p></p>
          )}
        </div>
      </div>

      <div id="experienceContainer">
        {educationData.length > 0 ? (
          <h2 id="experienceDisplay" className="eduExpHeader bold">
            Experience
          </h2>
        ) : (
          <p></p>
        )}

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
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
