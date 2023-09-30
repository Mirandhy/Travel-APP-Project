const { Schema, model } = require("mongoose");

const tourCategorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Tour-Category", tourCategorySchema);