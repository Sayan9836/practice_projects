import React, { useEffect, useRef, useState } from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
        }
        return prev;
      });
    }, 100);

    if (value == 100) {
      console.log("hello");
    }

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  useEffect(() => {
    // setPercentage(Math.min(100, Math.max(value, 0)))
    // setPercentage(value);
    console.log(value);
  }, [value]);

  return (
    <div>
      <div className="progress">
        <span style={{ color: `${value > 49 ? "white" : "black"}` }}>
          {value.toFixed()}%
        </span>
        <div
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-aria-valuenow={value.toFixed()}
        />
      </div>
      <div style={{ position: "absolute", left: "46%" }}>
        {value >= 100 ? <span>completed!</span> : <span>... loading</span>}
      </div>
    </div>
  );
};

export default ProgressBar;
