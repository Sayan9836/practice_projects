import React, { useState } from "react";
import "./Form.css";
const Form = ({ EmpData }) => {
  console.log(EmpData);

  const initialState = {
    name: "",
    email: "",
    position: "",
    Age: "",
    DOB: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormData = (e) => {
    e.preventDefault();
    EmpData.push(formData);
    console.log(EmpData);
  };
  return (
    <form onSubmit={handleFormData}>
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter Your Position"
        name="position"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Enter Your Age"
        name="Age"
        onChange={handleChange}
      />
      <input
        type="date"
        placeholder="Enter your DOB"
        name="DOB"
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
