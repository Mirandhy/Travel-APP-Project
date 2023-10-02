const { Schema, model } = require("mongoose");

const tourGuideSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    phone_number: {
      type: String,
      unique: true,
      trim: true,
      minLength: 8,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      minLength: 10,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Tour-Guides", tourGuideSchema);
