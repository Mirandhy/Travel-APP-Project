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
    customer: {
      type: Object,
      required: true,
    },
    tour: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", bookingSchema);
