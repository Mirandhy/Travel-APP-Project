const Tour = require("../../models/tour.cjs");
const Location = require("../../models/location.cjs");
const TourGuide = require("../../models/tour_guide.cjs");

module.exports = {
  create_tour,
  read_tour,
  read_tours,
  update_tour,
  delete_tour,
};

async function create_tour(req, res) {
  try {
    let searched_location = await Location.findById(req.body.location._id);
    if (!searched_location) {
      return res.status(404).json({ msg: "Location Not Found!" });
    }
    let searched_guide = await TourGuide.findById(req.body.tour_guide._id);
    if (!searched_guide) {
      return res.status(404).json({ msg: "Tour Guide Not Found!" });
    }
    console.log(req.body);
    await Tour.create(req.body);
    res.status(200).json({ msg: "Successfully Created Tour" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_tour(req, res) {
  try {
    let searched_tour = await Tour.findById(req.params.id);
    if (searched_tour) {
      res.status(200).json({ tour: searched_tour });
    } else {
      res.status(404).json({ msg: "Tour not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_tours(req, res) {
  try {
    let searched_tours = await Tour.find({});
    res.status(200).json({ tours: searched_tours });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function update_tour(req, res) {
  try {
    let searched_location = await Location.findById(req.body.location._id);
    if (!searched_location) {
      return res.status(404).json({ msg: "Location Not Found!" });
    }
    let searched_guide = await TourGuide.findById(req.body.tour_guide._id);
    if (!searched_guide) {
      return res.status(404).json({ msg: "Tour Guide Not Found!" });
    }
    let searched_tour = await Tour.findById(req.params.id);
    if (searched_tour) {
      await Tour.findByIdAndUpdate(req.params.id, {
        tour_name: req.body.tour_name,
        description: req.body.description,
        price: req.body.price,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        location_id: req.body.location._id,
        tour_guide: req.body.tour_guide._id,
      });
      res.status(200).json({ msg: "Successfully Updated Tour" });
    } else {
      res.status(404).json({ msg: "Tour not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function delete_tour(req, res) {
  try {
    console.log(req.body);
    let searched_tour = await Tour.findById(req.params.id);
    if (searched_tour) {
      await Tour.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Successfully Deleted Tour" });
    } else {
      res.status(404).json({ msg: "Tour not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
