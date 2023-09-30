const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    booking_date: {
      type: Date,
      required: true,
    },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    tour_id: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", bookingSchema);
