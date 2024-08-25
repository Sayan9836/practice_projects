import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../../state_management/atoms/TodoState";
import { FilteredTodoLists } from "../../state_management/selectors/FilteredTodoListState";

const TodoList = () => {
  const [todoList, SetTodoList] = useRecoilState(todoListState);
  const listToRender = useRecoilValue(FilteredTodoLists);

  const DeleteTodo = (id) => {
    const filterTodo = todoList?.filter((todo) => todo.id !== id);
    SetTodoList(filterTodo);
  };

  const toggleTodoCompletion = (index) => {
    const newList = todoList?.map((todo) => {
      return todo.id === index
        ? { ...todo, isComplete: !todo.isComplete }
        : todo;
    });
    console.log(newList);

    SetTodoList(newList);
  };
  return (
    <div>
      {listToRender?.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => toggleTodoCompletion(todo.id)}
          />
          <button onClick={() => DeleteTodo(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
