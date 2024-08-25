import { useReducer } from "react";
import { Reducer } from "./Reducer";
import { createContext } from "react";

export const TodoContext = createContext();

const Context = ({ children }) => {
  const [todos, dispatch] = useReducer(Reducer, []);
  const createTodo = (todo) => {
    console.log(todo);
    dispatch({ type: "add_todo", payload: todo });
  };

  const deleteTodo = (todo) => {
    dispatch({ type: "delete_todo", payload: todo });
  };

  const updateTodo = (todo) => {
    console.log("called2");
    dispatch({ type: "update_todo", payload: todo });
  };

  return (
    <TodoContext.Provider
      value={{ todos, dispatch, createTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
