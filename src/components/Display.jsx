import "../App.css";
import useState from "react";

export default function Display(props) {
  const { name, email, phone, address } = props.data;

  return (
    <div id="display">
      <div id="personalInfoContaienr">
        <h1 id="NameDisplay">{name}</h1>
        <div id="infoNoName">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}
