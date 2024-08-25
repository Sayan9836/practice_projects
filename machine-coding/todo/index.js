import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import TodoRoutes from "./routes/todo.routes.js";
import { config } from "dotenv";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

config({ path: ".env" });

app.use(express.urlencoded({ extended: true }));

try {
  await mongoose.connect("mongodb://localhost:27017/MYTODOAPP").then(() => {
    console.log("mongoDB connected successfully");
  });
} catch (error) {
  console.log(error.message || "database not connnected ");
}

app.use("/api/v1/todo", TodoRoutes);

app.listen(5000, (res) => {
  console.log("server is listening on port 5000");
});
