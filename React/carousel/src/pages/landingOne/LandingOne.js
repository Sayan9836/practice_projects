import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingOne = () => {
  const [todos, setTodos] = useState();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isclicked, setIsClicked] = useState(false);
  const [currId, setCurrId] = useState("");

  const URL = "http://localhost:5000/api/v1";

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const fetchAllTodos = async () => {
    const response = await axios.get(`${URL}/todo/get-todos`);
    console.log(response.data.data);
    setTodos(response.data.data);
  };

  const addTodo = async () => {
    const response = await fetch(`${URL}/todo/add-todo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: desc,
      }),
    });

    setName("");
    setDesc("");

    await fetchAllTodos();
  };

  const getTodoById = async (id) => {
    const response = await axios.get(`${URL}/todo/get-todo/${id}`);
    console.log(response);
    setName(response.data.data.name);
    setDesc(response.data.data.description);
    setIsClicked(true);
    setCurrId(id);
  };

  const updateTodo = async () => {
    try {
      const response = await fetch(`${URL}/todo/update-todo/${currId}`, {
        method: "PATCH",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          description: desc,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setIsClicked(false);
    setName("");
    setDesc("");
    fetchAllTodos();
  };

  const removeTodo = async (id) => {
    try {
      const response = await axios.delete(`${URL}/todo/delete-todo/${id}`);
    } catch (error) {
      console.log(error);
    }
    fetchAllTodos();
  };

  const searchTodoHandler = async (e) => {
    const key = e.target.value.trim();
    if (key) {
      let results = await fetch(`${URL}/todo/search-todos/${key}`);
      results = await results.json();

      setTodos(results.data);
    } else {
      fetchAllTodos();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <textarea
        cols="30"
        rows="5"
        name="description"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      ></textarea>

      <div>
        <label>Search here:</label>
        <input type="text" onChange={searchTodoHandler} />
      </div>
      {isclicked ? (
        <button onClick={updateTodo}>updateTodo</button>
      ) : (
        <button onClick={addTodo}>addTodo</button>
      )}
      {todos?.map((todo) => {
        return (
          <div>
            <span>{todo.name}</span>
            <p>{todo.description}</p>
            <button onClick={() => getTodoById(todo._id)}>update</button>
            <button onClick={() => removeTodo(todo._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default LandingOne;
