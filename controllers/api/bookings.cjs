const Booking = require("../../models/booking.cjs");
const User = require("../../models/user.cjs");
const Tour = require("../../models/tour.cjs");

//models database schema for each entity
module.exports = {
  create_booking,
  read_booking,
  read_bookings,
  read_customer_bookings,
  update_booking,
  delete_booking,
};

async function create_booking(req, res) {
  try {
    // Add the booking to the database. first search for customer and tour booking to ensure they exist
    let searched_customer = await User.findById(req.body.customer._id);
    if (!searched_customer) {
      return res.status(404).json({ msg: "Customer Not Found!" });
    }
    let searched_tour = await Tour.findById(req.body.tour._id);
    if (!searched_tour) {
      return res.status(404).json({ msg: "Tour Not Found!" });
    }
    console.log(req.body);
    await Booking.create(req.body);
    res.status(200).json({ msg: "Successfully Created Booking" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_booking(req, res) {
  try {
    let searched_booking = await Booking.findById(req.params.id);
    if (searched_booking) {
      res.status(200).json({ booking: searched_booking });
    } else {
      res.status(404).json({ msg: "Booking not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_bookings(req, res) {
  try {
    let searched_bookings = await Booking.find({});
    res.status(200).json({ bookings: searched_bookings });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_customer_bookings(req, res) {
  try {
    let searched_bookings = await Booking.find({
      "customer._id": req.params.customer_id,
    });
    res.status(200).json({ bookings: searched_bookings });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function update_booking(req, res) {
  try {
    let searched_customer = await User.findById(req.body.customer._id);
    if (!searched_customer) {
      return res.status(404).json({ msg: "Customer Not Found!" });
    }
    let searched_tour = await Tour.findById(req.body.tour._id);
    if (!searched_tour) {
      return res.status(404).json({ msg: "Tour Not Found!" });
    }
    console.log(req.body);
    let searched_booking = await Booking.findById(req.params.id);
    if (searched_booking) {
      await Booking.findByIdAndUpdate(req.params.id, {
        price: req.body.price,
        booking_date: req.body.booking_date,
        customer_id: req.body.customer._id,
        tour_id: req.body.tour._id,
      });
      res.status(200).json({ msg: "Successfully Updated Booking" });
    } else {
      res.status(404).json({ msg: "Booking not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// delete existing booking by ID
async function delete_booking(req, res) {
  try {
    console.log(req.body);
    let searched_booking = await Booking.findById(req.params.id);
    if (searched_booking) {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Successfully Deleted Booking" });
    } else {
      res.status(404).json({ msg: "Booking not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
