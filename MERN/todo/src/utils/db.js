import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const mongoInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DBNAME}`,
    );
    console.log(
      "mongoDB connected successfully on",
      mongoInstance.connection.host,
    );
  } catch (error) {
    console.log("err while connecting to mongoDB");
  }
};

export { connectDB };
