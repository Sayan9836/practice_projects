import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },

    description: {
      type: String,
      minlength: 5,
      maxlength: 200,
    },
  },
  { timestamps: true },
);

export const Course = model("Course", courseSchema);
