import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import { config } from "dotenv";
import todoRoutes from "./routes/Todo.routes.js";

const app = express();

config({ path: "./env" });

app.use(cors());
app.use(express.json());

app.use("/", todoRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT).then(() => {
      console.log(`server listening on PORT ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("mongodb connection failed");
  });
