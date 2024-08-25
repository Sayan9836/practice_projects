import express from "express";
import cors from "cors";
import UserRouter from "../src/routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes

app.use("/api/v1/user", UserRouter);
export default app;
