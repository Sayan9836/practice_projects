import React from "react";
import HOC from "../HOFs/HOC";

const CountTwo = ({ count, handleCount }) => {
  return (
    <div>
      <div>
        <span>Count - {count}</span>
        <button onClick={handleCount}>Button</button>
      </div>
    </div>
  );
};

export default HOC(CountTwo);
