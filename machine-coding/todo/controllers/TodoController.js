import { BSON } from "mongodb";
import { Todo } from "../models/Todo.js";
import mongoose from "mongoose";
import { User } from "../models/User.js";
import Jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import nodemailer from "nodemailer";

const addTODO = async (req, res) => {
  const { name, description } = req.body;
  console.log(name, description);

  try {
    if (!name || !description) {
      return res.status(400).json({
        status: "error",
        message: "both name and description are required",
      });
    }

    const existed = await Todo.findOne({ name });

    if (existed) {
      return res.status(400).json({
        status: "error",
        message: "name already exists!",
      });
    }

    const todo = await Todo.create({ name: name, description: description });

    if (!todo) {
      return res.status(400).json({
        status: "error",
        message: "todo not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "todo successfully created",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "error while creating todo",
    });
  }
};

const getTodo = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    query,
    sortBy = "name",
    sortType = "asc",
  } = req.query;

  const sort = {
    [sortBy]: sortType === "asc" ? 1 : -1,
  };
  try {
    const todos = await Todo.find({
      name: { $regex: query, $options: "i" },
    })
      .populate()
      .sort(sort)
      .limit(limit)
      .skip((page - 1) * limit);

    return res.status(200).json({
      status: "success",
      data: todos,
      message: "todos fetched succesfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      data: null,
      message: error?.message || "todos fetched succesfully",
    });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findById(id);

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "todo fetched successfully"));
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "error",
        message: "not a valid mongodb object",
      });
    }

    if (!description) {
      return res.status(400).json({
        status: "error",
        message: "both name and description is required",
      });
    }

    const todosAfterUpdate = await Todo.findByIdAndUpdate(
      id,
      {
        description: description,
      },
      { new: true },
    );

    if (!todosAfterUpdate) {
      return res.status(400).json({
        status: "error",
        message: "todo not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: todosAfterUpdate,
      message: "todos updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      todosAfterUpdate,
      message: "error while updating todo",
    });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    await Todo.findByIdAndDelete(id);
    return res.status(200).json({
      status: "success",
      message: "todo deleted successfully",
    });
  } catch (error) {
    return res.status(200).json({
      status: "error",
      message: "error while deleting todo",
    });
  }
};

const searchTodo = async (req, res) => {
  const { key } = req.params;
  const searchResults = await Todo.find({
    $or: [
      {
        name: { $regex: key, $options: "i" },
      },
      {
        description: { $regex: key, $options: "i" },
      },
    ],
  });

  res
    .status(200)
    .json(new ApiResponse(200, searchResults, "fetched data successfully"));
};

// for users

const signToken = (userId) =>
  Jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "1h" });

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  try {
    if (!email || !password) {
      throw new ApiError(400, "Email or password is missing");
    }

    const existed = await User.findOne({ email });

    if (existed) {
      throw new ApiError(400, "Email already exists!");
    }

    const newUser = await User.create({ email: email, password: password });

    if (!newUser) {
      throw new ApiError(400, "user not created");
    }

    res
      .status(200)
      .json(new ApiResponse(200, newUser, "User registered successfully"));
  } catch (error) {
    throw new ApiError(400, error?.message || "user registered unsuccessfully");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email or password is missing");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "Email not exists");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Password is incorrect");
  }

  const token = signToken(user._id);
  user.token = token;

  await user.save();
  res
    .status(200)
    .json(new ApiResponse(200, user, "user LoggedIn successfully"));
};

// after register send mail
const sendMailToUser = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "sayanearnings209@gmail.com",
      pass: "kooo pthg xdxo cttr",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "Sayn Maity", // sender address
      to: ["sayanmaity562@gmail.com"], // list of receivers
      subject: "Hello sayan ", // Subject line
      text: "this is the first mail i am sending to you", // plain text body
      html: "<h1>Hello SMTP?</h1>", // html body
    });

    console.log(nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
  // Message sent: <b658f8ca-6296-ccf4-8306-
};

export {
  addTODO,
  getTodo,
  updateTodo,
  getTodoById,
  deleteTodo,
  searchTodo,
  registerUser,
  loginUser,
  sendMailToUser,
};
