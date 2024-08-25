import React, { useState } from "react";
import "./style.css";
const DropDown = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  return (
    <nav>
      <ul>
        <li>home</li>
        <li>
          <span onClick={() => setClick(!click)}>section</span>
          {click && (
            <ul className="inner1">
              <li className="inner1_wrapper">
                <span onClick={() => setClick2(!click2)}>section1</span>
                {click2 && (
                  <ul className="inner2">
                    <li>section1.1</li>
                    <li>section1.2</li>
                  </ul>
                )}
              </li>

              <li>section2</li>
              <li>section3</li>
            </ul>
          )}
        </li>
        <li>services</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default DropDown;
