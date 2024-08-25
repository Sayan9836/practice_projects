import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currTime, setCurrTime] = useState("");

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const date = new Date().toLocaleTimeString();
    setCurrTime(date);

    setTimeout(() => {
      console.log("called");
      getTime();
    }, 1000);
  };

  return (
    <div>
      <h1>{currTime}</h1>
    </div>
  );
};

export default Clock;
