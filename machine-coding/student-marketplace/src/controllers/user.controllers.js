import { BSON } from "mongodb";
import { User } from "../models/User.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const signToken = (userId) =>
  jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "1h" });
const Register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "email and password both are required!");
  }

  try {
    const isExist = await User.findOne({ email });

    if (isExist) {
      throw new ApiError(400, "User already exists");
    }

    const user = await User.create({ email, password });

    return res
      .status(200)
      .json(new ApiResponse(200, user, "user Register successfully"));
  } catch (error) {
    throw new ApiError(400, "Error while registering user!");
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "email and password are required!");
  }

  try {
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      throw new ApiError(400, "user not found");
    }

    const isCorrectPassword = await user.isCorrectPassword(password);

    if (!isCorrectPassword) {
      throw new ApiError(400, "password a incorrect");
    }

    const token = signToken(user._id);

    if (!token) {
      throw new ApiError(400, "server error while creating token");
    }

    user.token = token;

    await user.save();

    return res
      .status(200)
      .cookie("accessToken", token)
      .json(new ApiResponse(200, user, "user loggedIn successfully"));
  } catch (error) {
    throw new ApiError(400, error?.message || "Error while login user");
  }
};

const searchTodo = async () => {
  const { name } = req.body;
  const { key } = req.params;

  try {
    const todo = await Todo.find({
      name: { $regex: key, $options: "i" },
    });

    res.status(200).json({
      status: "success",
      statusCode: "200",
      data: todo,
      message: "todos fetched successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      statusCode: "400",
      data: null,
      message: error?.message || "something went wrong!",
    });
  }
};

export { Register, Login };
