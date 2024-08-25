import React from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log("rendered1");
  return (
    <>
      {/* <span>{countFirst}</span>
      <button onClick={() => SetcountFirst((prev) => prev + 1)}>
        custom button
      </button> */}
      {children}
    </>
  );
});

export default Button;
