import React from "react";
import "./Cell.css";
import { useState } from "react";
const Cell = ({ data, setData, index, isClicked, setIsClicked }) => {
  const executeBgChangeLogic = () => {
    setData((prev) =>
      prev.map((ele, currIdx) =>
        currIdx !== index && ele.bg !== ""
          ? { ...ele, bg: "" }
          : currIdx === index
          ? { ...ele, bg: "red" }
          : ele,
      ),
    );

    setIsClicked(false);

    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  return (
    <div
      className={
        data[index].bg === ""
          ? "cell"
          : data[index].bg !== "" && isClicked
          ? "cell active"
          : "cell focus"
      }
      onClick={() => executeBgChangeLogic()}
    ></div>
  );
};

export default Cell;
