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
      type: Schema.Types.ObjectId,
      ref: "Tour-Guide",
      required: true,
    },
    location_id: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Tour", tourSchema);
