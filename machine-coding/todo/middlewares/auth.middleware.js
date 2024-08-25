import Jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const Authorize = async (req, res, next) => {
  console.log(req.headers);
  const token =
    req?.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  console.log("called");

  try {
    if (!token) {
      // throw new ApiError(400, "unauthorize token is missing");
      console.log("unauthorize token is missing");
    }

    const decoded = Jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      // throw new ApiError(400, "Invalid token");
      console.log("Invalid token");
    }

    const user = await User.findById(decoded._id);

    req.user = user;
    next();
  } catch (error) {
    // throw new ApiError(400, "unauthorize request");
    console.log("unauthorize request");
  }
};

export { Authorize };
