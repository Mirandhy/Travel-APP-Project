const { Schema, model } = require("mongoose");

const tourSchema = new Schema(
  {
    tour_name: { type: String, required: true },
    description: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    tour_guide: {
      type: Object,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Tour", tourSchema);
