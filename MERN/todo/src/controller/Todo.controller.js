import mongoose from "mongoose";
import { Todo } from "../models/Todo.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addTodo = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400).json(new ApiError(404, "all details are required"));
  }

  const existed = await Todo.findOne({ name });

  if (existed) {
    res.status(404).json(new ApiError(404, "todo name already exists"));
  }

  const newTodo = await Todo.create({ name, description });

  if (!newTodo) {
    res.status(409).json(new ApiError(404, "error while creating Todo"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, newTodo, "todo created successfully"));
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res
      .status(404)
      .json(new ApiError(404, "please mention which todo to delete"));
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json(new ApiError(400, "Invalid id"));
  }

  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);
    if (!deleteTodo) {
      res.status(403).json(new ApiError(403, "Todo not found"));
    }
  } catch (error) {
    res.status(403).json(new ApiError(403, "error while deleting Todo"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, deleteTodo, "Todo deleted successfully"));
};

const updateTodo = async (req, res) => {
  const id = req.params.id;

  const { name, description } = req.body;

  if (!id) {
    res.status(404).json(new ApiError(404, "Id is missing"));
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json(new ApiError(400, "Invalid Id"));
  }

  const updateObject = {};

  if (name) {
    updateObject.name = name;
  }

  if (description) {
    updateObject.description = description;
  }

  if (Object.keys().length === 0) {
    res.status(404).json(new ApiError(404, "Atleast one field is required"));
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    { id },
    {
      $set: updateObject,
    },
  );

  try {
    if (!updatedTodo) {
      res.status(404).json(new ApiError(404, "Todo not found"));
    }
  } catch (error) {
    res.status(404).json(new ApiError(404, "error while updating todo"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, updateTodo, "Todo updated Successfully"));
};

const getTodo = async (req, res) => {
  const todos = await Todo.find();

  if (todos) {
    res
      .status(200)
      .json(new ApiResponse(200, todos, "successfull got all todos"));
  } else {
    res.status(400).json(new ApiError(400, "error while fetching todos"));
  }
};

export { addTodo, deleteTodo, updateTodo, getTodo };
