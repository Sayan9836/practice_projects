import React, { useState } from "react";
import "./PasGen.css";
const PasGen = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    generatePassword(formData);
  };

  const generatePassword = (formData) => {
    const length = formData.get("passwordLength");
    console.log(length);
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$%^&";
    let element = "";
    let password = "";
    for (let i = 0; i < length; i++) {
      if (i % 4 === 0) {
        if (formData.get("upperCase") !== null) {
          element = upperCase;
        } else {
          element = lowerCase;
        }
      } else if (i % 4 === 1) {
        element = lowerCase;
      } else if (i % 4 === 2) {
        if (formData.get("numbers") !== null) {
          element = numbers;
        } else {
          element = lowerCase;
        }
      } else {
        if (formData.get("symbols") !== null) {
          element = symbols;
        } else {
          element = lowerCase;
        }
      }

      let idx = Math.floor(Math.random() * element.length);
      password += element[idx];
    }

    setPassword(password);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <span>
            password:<span password="password">{password}</span>
          </span>

          <button
            copy="copy"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            copy
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="slider">
            <label>
              password length: <span>{passwordLength}</span>
            </label>
            <input
              type="range"
              min={1}
              max={100}
              defaultValue={0}
              name="passwordLength"
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className="options">
            <div>
              <input type="checkbox" name="lowerCase" />
              <label>LowerCase</label>
            </div>
            <div>
              <input type="checkbox" name="upperCase" />
              <label>UpperCase</label>
            </div>

            <div>
              <input type="checkbox" name="numbers" />
              <label>Number</label>
            </div>

            <div>
              <input type="checkbox" name="symbols" />
              <label>Symbol</label>
            </div>
          </div>

          <button type="submit">Generate Password</button>
        </form>
      </div>
    </div>
  );
};

export default PasGen;
