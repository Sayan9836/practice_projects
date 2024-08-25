import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const TodoContext = createContext();

const Context = ({ children }) => {
  const [todos, dispatch] = useReducer(Reducer, []);
  console.log(todos);

  const CreateTodo = (todo) => {
    dispatch({ type: "add", payload: todo });
  };

  const DeleteTodo = (todo) => {
    dispatch({ type: "delete", payload: todo });
  };

  const UpdateTodo = (id) => {
    dispatch({ type: "update", payload: id });
  };

  return (
    <TodoContext.Provider value={{ todos, CreateTodo, DeleteTodo, UpdateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
