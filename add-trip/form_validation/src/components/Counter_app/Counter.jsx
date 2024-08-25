import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../../state_management/atoms/Counter";

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
