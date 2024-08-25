import mongoose, { Schema, model } from "mongoose";

const subscribeSchema = new Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true },
);

export const Subscribe = model("Subscribe", subscribeSchema);
