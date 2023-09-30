const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    map_cordinates: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Location", locationSchema);
