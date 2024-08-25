import React, { useState } from "react";

const HOC = (OriginalComponent) => {
  function NewComponent() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount((prev) => prev + 1);
    };
    return <OriginalComponent handleCount={handleCount} count={count} />;
  }

  return NewComponent;
};

export default HOC;
