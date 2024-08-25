import app from "./app.js";
import { connetDB } from "./config/db.js";
import { config } from "dotenv";

config({
  path: ".env",
});

connetDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server started!");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error");
  });
