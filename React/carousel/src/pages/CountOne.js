import React, { useState } from "react";
import HOC from "../HOFs/HOC";

const CountOne = ({ count, handleCount }) => {
  return (
    <div>
      <span>Count - {count}</span>
      <button onClick={handleCount}>Button</button>
    </div>
  );
};

export default HOC(CountOne);
