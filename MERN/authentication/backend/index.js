import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
// import cors from "cors";
import { config } from "dotenv";
const app = express();

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST"],
//   }),
// );
app.use(express.json());
app.use("api/v1/users", userRouter);

config({ path: "./.env" });

connectDB().then(() => {
  app.listen(() => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
