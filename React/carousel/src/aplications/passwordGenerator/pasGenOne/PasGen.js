import React, { useState } from "react";
import "./PasGen.css";
import { toast } from "react-toastify";
const PasGen = () => {
  const initialState = {
    length: "",
    first: false,
    second: false,
    third: false,
    forth: false,
  };

  const [data, setData] = useState(initialState);
  const [GenPas, setGenPas] = useState("password");

  const GeneratePassword = (length, first, second, third, forth) => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "@#$%&";
    let result = "";
    let remaining =
      uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    if (first) {
      result += uppercaseLetters.charAt(
        Math.floor(Math.random() * uppercaseLetters.length),
      );
      length -= 1;
    }

    if (second) {
      result += lowercaseLetters.charAt(
        Math.floor(Math.random() * lowercaseLetters.length),
      );
      length -= 1;
    }

    if (third) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      length -= 1;
    }

    if (forth) {
      result += specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length),
      );
      length -= 1;
    }

    for (let i = 0; i < length; i++) {
      result += remaining.charAt(Math.floor(Math.random() * remaining.length));
    }

    setGenPas(result);
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      if ([e.target.name] == "first") {
        if (data.first) {
          setData({
            ...data,
            [e.target.name]: false,
          });
        } else {
          setData({
            ...data,
            [e.target.name]: true,
          });
        }
      } else if ([e.target.name] == "second") {
        if (data.second) {
          setData({
            ...data,
            [e.target.name]: false,
          });
        } else {
          setData({
            ...data,
            [e.target.name]: true,
          });
        }
      } else if ([e.target.name] == "third") {
        if (data.third) {
          setData({
            ...data,
            [e.target.name]: false,
          });
        } else {
          setData({
            ...data,
            [e.target.name]: true,
          });
        }
      } else if ([e.target.name] == "forth") {
        if (data.forth) {
          setData({
            ...data,
            [e.target.name]: false,
          });
        } else {
          setData({
            ...data,
            [e.target.name]: true,
          });
        }
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    GeneratePassword(
      data.length,
      data.first,
      data.second,
      data.third,
      data.forth,
    );
    console.log(data);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(GenPas);
    toast.success("password copied successfully!");
  };

  return (
    <div>
      <div className="container">
        <header>
          <div>
            <span className="password">{GenPas}</span>
            <button onClick={handleCopy} className="copy">
              COPY
            </button>
          </div>
          <div>
            <span>Character Length</span>
            <span>{data.length}</span>
          </div>
          <input
            type="range"
            min="1"
            max="25"
            className="slider"
            name="length"
            value={data.length}
            onChange={handleChange}
          />
        </header>

        <main>
          <div>
            <input type="checkbox" name="first" onChange={handleChange} />
            <label htmlFor="UpperCase">Include UpperCase Letters</label>
          </div>
          <div>
            <input type="checkbox" name="second" onChange={handleChange} />
            <label htmlFor="LowerCase">Include LowerCase Letters</label>
          </div>
          <div>
            <input type="checkbox" name="third" onChange={handleChange} />
            <label htmlFor="Numbers">Include Numbers</label>
          </div>
          <div>
            <input type="checkbox" name="forth" onChange={handleChange} />
            <label htmlFor="Symbols">Include Symbols</label>
          </div>
        </main>

        <footer>
          <div>
            <span>Strength:</span>
            <span>{data.length > 19 ? `HARD` : `MEDIUM`}</span>
          </div>
          <button onClick={handleSubmit} className="create_button">
            GENERATE PASSWORD
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PasGen;
