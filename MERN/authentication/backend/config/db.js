import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch(() => console.log("database connection faied"));
};

export default connectDB;
