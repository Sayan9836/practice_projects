import React, { useState } from "react";
import { useEffect } from "react";
import "./Form.css";
import axios from "axios";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [gender, setGender] = useState("");
  const [file, setFile] = useState("");
  const [habits, setHabits] = useState([]);

  const handleHabitSelection = (habit, e) => {
    if (e.target.checked) {
      setHabits((prev) => {
        if (!habits?.includes(habit)) {
          return [...prev, habit];
        }
        return prev;
      });
    }
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const URL = "http://localhost:5000/api/v1/todo/upload/single";
    const response = await axios.post(URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isCorrectPattern(email, "email")) {
      alert("incorrect email pattern");
    }
    if (!isCorrectPattern(password, "password")) {
      alert("incorrect password pattern");
    }
  };

  const isCorrectPattern = (item, type) => {
    if (type === "email") {
      const emailRegex = new RegExp(
        /^[a-zA-Z.-_0-9]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/,
      );
      return emailRegex.test(item);
    } else if (type === "password") {
      const regexString =
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/;
      const passwordRegex = new RegExp(regexString);
      return passwordRegex.test(item);
    }
  };

  return (
    <div className="form_container">
      <h1>USER DETAILS FORM</h1>
      <form onSubmit={handleFormSubmit} className="form_wrapper">
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="gender_container">
          <label>Gender</label>
          <div className="gender_wrapper">
            <div>
              <label>Male</label>
              <input
                name="gender"
                type="radio"
                onChange={() => setGender("Male")}
              />
            </div>

            <div>
              <label>Female</label>
              <input
                name="gender"
                type="radio"
                onChange={() => setGender("Female")}
              />
            </div>

            <div>
              <label>Others</label>
              <input
                name="gender"
                type="radio"
                onChange={() => setGender("Others")}
              />
            </div>
          </div>
        </div>

        <div className="file_container">
          <label>file</label>
          <div className="file_wrapper">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <span onClick={handleFileUpload}>upload</span>
          </div>
        </div>

        <div className="habits_container">
          <label>habits</label>

          <div className="habits_wrapper">
            <div>
              <label>FootBall</label>
              <input
                type="checkbox"
                onChange={(e) => handleHabitSelection("FootBall", e)}
              />
            </div>

            <div>
              <label>Cricket</label>
              <input
                type="checkbox"
                onChange={(e) => handleHabitSelection("Cricket", e)}
              />
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

const emailRegex = new RegExp(/^[a-zA-Z-._0-9]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/);
const passwordRegex = new RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,20}$/,
);
