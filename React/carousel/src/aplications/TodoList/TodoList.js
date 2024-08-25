import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/Context";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const { todos, CreateTodo, DeleteTodo, UpdateTodo } = useContext(TodoContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateTodo({ text, id: uuid() });
  };
  console.log(todos, "from TodoListComonent");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Create</button>
      </form>
      <div className="todo_container">
        {todos?.map((todo, idx) => {
          return (
            <div className="todo">
              <span>{todo.text}</span>
              <button onClick={() => DeleteTodo(todo)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
