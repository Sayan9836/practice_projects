import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "this field is required"],
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Todo = model("Todo", todoSchema);
