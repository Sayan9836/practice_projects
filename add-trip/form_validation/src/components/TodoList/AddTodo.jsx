import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../state_management/atoms/TodoState.jsx";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const [TodoList, setTodoList] = useRecoilState(todoListState);
  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      { id: getId(), text: input, isComplete: false },
    ]);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addItem}>addTodo</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default AddTodo;
