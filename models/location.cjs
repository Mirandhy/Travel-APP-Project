const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Location", locationSchema);
