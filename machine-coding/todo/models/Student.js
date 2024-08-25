import { Schema, model } from "mongoose";

const adressSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phoneNo: {
      type: String,
      required: true,
    },

    address: {
      type: adressSchema,
    },
  },
  { timestamps: true },
);

export const Student = model("Student", studentSchema);
