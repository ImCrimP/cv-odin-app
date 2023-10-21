import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div id="mainContainer">
      <div id="left-side-container">
        <GeneralInfo />
        <Education />
        <Experience />
      </div>

      <Display />
    </div>
  );
}

export default App;
