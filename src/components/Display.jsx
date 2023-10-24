import "../App.css";
import React from "react";
import PropTypes from "prop-types";

export default function Display({
  personInfo,
  isPersonInfoSaved,
  education,
  isEducationInfoSaved,
}) {
  return (
    <div id="display">
      {isPersonInfoSaved && (
        <div id="personalInfoContainer" className="sectionOfInputContainer">
          <h1 id="nameDisplay">{personInfo.fullName}</h1>
          <div id="infoNoName">
            <p>{personInfo.email}</p>
            <p>{personInfo.phoneNumber}</p>
            <p>{personInfo.address}</p>
          </div>
        </div>
      )}

      {isEducationInfoSaved && (
        <div id="educationContainer" className="sectionOfInputContainer">
          <h1 id="educationHeader">Education</h1>
          {education.map((edu, index) => (
            <div key={index} id={`educationEntry_${index}`}>
              <p>{edu.school}</p>
              <p>{edu.degree}</p>
              <p>{edu.startDate}</p>
              <p>{edu.endDate}</p>
              <p>{edu.schoolAddress}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Display.propTypes = {
  personInfo: PropTypes.object.isRequired,
  isPersonInfoSaved: PropTypes.bool.isRequired,
  education: PropTypes.array.isRequired,
  isEducationInfoSaved: PropTypes.bool.isRequired,
};

Display.defaultProps = {
  education: [],
};
