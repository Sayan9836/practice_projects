import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.js";

export const Authorization = async (req, res, next) => {
  const token = req?.headers["authorization"];

  if (!token) {
    throw new ApiError(400, "unAuthorized");
  }

  try {
    const decoded = jwt.verify(process.env.SECRET_KEY, token);

    const user = await User.findById(decoded?._id).select(
      "-password refreshToken",
    );

    if (!user) {
      throw new ApiError(400, "Invalid ascess token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(500, error?.message || "error while verifying user");
  }
};
