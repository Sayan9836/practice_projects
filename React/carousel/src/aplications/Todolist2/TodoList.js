import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/context2/Context";
import { useEffect } from "react";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoUpdate, setTodoUpdate] = useState(undefined);
  const { todos, dispatch, createTodo, deleteTodo, updateTodo } =
    useContext(TodoContext);

  useEffect(() => {
    console.log(dispatch);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoUpdate);
    if (todoUpdate) {
      console.log("called1");
      updateTodo({ text: text, id: todoUpdate });
      setTodoUpdate(undefined);
    } else {
      createTodo({ text: text, id: Date.now() });
    }
    setText("");
  };

  const handleTodoUpdate = (todo) => {
    setText(todo.text);
    setTodoUpdate(todo.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {todos?.map((todo) => {
        return (
          <div>
            {todo.text}
            <span
              style={{ border: "1px solid black", marginInline: "10px" }}
              onClick={() => {
                deleteTodo(todo);
                setTodoUpdate(undefined);
              }}
            >
              delete
            </span>
            <span
              style={{ border: "1px solid black" }}
              onClick={() => handleTodoUpdate(todo)}
            >
              update
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
