import { User } from "../model/user.model.js";
import Jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;
const createJWT = (userId) => {
  const token = Jwt.sign({ userId }, SECRET_KEY, { expiresIn: "2h" });
  return token;
};

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  if ([fullname, email, password].some((field) => field?.trim() == "")) {
    return res.status(404).json({
      status: "error",
      statusCode: 404,
      message: "ALL fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      status: "error",
      statusCode: 400,
      message: "User Already exists",
    });
  }

  const newUser = await User.create({
    fullname: fullname,
    email: email,
    password: password,
  });

  const token = await createJWT(user._id);

  if (!token) {
    return res.status(400).json({
      status: "error",
      statusCode: 404,
      message: "JWT signing failed",
    });
  }

  res.status(200).json({
    newUser,
    status: "success",
    statusCode: 200,
    message: "User created successfuly",
    token,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      status: "error",
      statusCode: 404,
      message: "ALL fields are required",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      status: "error",
      statusCode: 404,
      message: "User does not exists",
    });
  }

  const isPasswordCorrect = await user.isCorrectPassword(password);

  if (!isPasswordCorrect) {
    return res.status(400).json({
      status: "error",
      statusCode: 404,
      message: "Please enter correct password",
    });
  }

  const token = await createJWT(user._id);

  if (!token) {
    return res.status(400).json({
      status: "error",
      statusCode: 404,
      message: "JWT signing failed",
    });
  }

  res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "user loggedIn successfull",
    token,
  });
};

const products = () => {
  return res.json({
    message: "hello",
  });
};

export { registerUser, loginUser, products };
