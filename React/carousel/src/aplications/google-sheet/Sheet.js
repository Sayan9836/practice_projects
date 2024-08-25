import React, { useState } from "react";
import "./Sheet.css";
import Cell from "./cell/Cell";
import { useEffect } from "react";
const matrix = [
  {
    id: 1,
    bg: "",
  },
  {
    id: 2,
    bg: "",
  },
  {
    id: 3,
    bg: "",
  },
  {
    id: 4,
    bg: "",
  },
  {
    id: 5,
    bg: "",
  },
  {
    id: 6,
    bg: "",
  },
  {
    id: 7,
    bg: "",
  },
  {
    id: 8,
    bg: "",
  },
  {
    id: 9,
    bg: "",
  },
  {
    id: 10,
    bg: "",
  },
  {
    id: 11,
    bg: "",
  },
  {
    id: 12,
    bg: "",
  },
  {
    id: 13,
    bg: "",
  },
  {
    id: 14,
    bg: "",
  },
  {
    id: 15,
    bg: "",
  },
  {
    id: 16,
    bg: "",
  },
];

const Sheet = () => {
  const [data, setData] = useState(matrix);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    console.log("changed=> ", data);
  }, [data]);
  return (
    <>
      <div className="wrapper">
        {data?.map((ele, index) => (
          <Cell
            key={index}
            data={data}
            setData={setData}
            index={index}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        ))}
      </div>
      <button onClick={() => setIsClicked(!isClicked)}>change color</button>
    </>
  );
};

export default Sheet;
