import "../App.css";
import { useState } from "react";

export default function GeneralInfo(props) {
  const [name, setName] = useState(props.data.name);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [address, setAddress] = useState(props.data.address);

  const handleSubmit = () => {
    const updatedData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    console.log("updated data", updatedData);
    props.onSubmit(updatedData);
    console.log("props", props);
  };

  return (
    <div id="genInfoContainer" className="sectionContainer">
      <h1 className="header">Personal Info</h1>
      <div className="inputContainer">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
