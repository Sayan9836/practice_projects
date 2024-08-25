import mongoose from "mongoose";

export const connetDB = async () => {
  try {
    const mongoInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      "Database connected successfully",
      mongoInstance.connection.host,
    );
  } catch (error) {
    console.log(error?.message || "Database connection unsuccesfull");
  }
};
