import React from "react";
import "./ToolTip.css";
import { Spring, useSpring } from "@react-spring/web";
const ToolTip = ({ hover }) => {
  const props = useSpring({});
  return (
    <div className="tooltip">
      <Spring config={{ duration: 500 }}>
        {(props) => <div style={props}>{hover}</div>}
      </Spring>
    </div>
  );
};

export default ToolTip;
