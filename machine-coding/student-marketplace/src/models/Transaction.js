import mongoose, { Schema, model } from "mongoose";

const transactionSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

export const Transaction = model("Transaction", transactionSchema);
