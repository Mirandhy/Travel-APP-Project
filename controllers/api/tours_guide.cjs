const Tour_guide = require("../../models/tour_guide.cjs");

module.exports = {
  create_tour_guide,
  read_tour_guide,
  update_tour_guide,
  delete_tour_guide,
};

async function create_tour_guide(req, res) {
  try {
    // Add the tour_guide to the database
    console.log(req.body);
    await Tour_guide.create(req.body);
    res.status(200).json({ msg: "Successfully Created Tour Guide" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_tour_guide(req, res) {
  try {
    // Add the tour_guide to the database
    let searched_tour_guide = await Tour_guide.findById(req.params.id);
    if (searched_tour_guide) {
      res.status(200).json({ tour_guide: searched_tour_guide });
    } else {
      res.status(404).json({ msg: "Tour Guide not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function update_tour_guide(req, res) {
  try {
    console.log(req.body);
    let searched_tour_guide = await Tour_guide.findById(req.params.id);
    if (searched_tour_guide) {
      await Tour_guide.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        dob: req.body.dob,
        phone_number: req.body.phone_number,
        address: req.body.address,
      });
      res.status(200).json({ msg: "Successfully Updated Tour Guide" });
    } else {
      res.status(404).json({ msg: "Tour Guide not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function delete_tour_guide(req, res) {
  try {
    console.log(req.body);
    let searched_tour_guide = await Tour_guide.findById(req.params.id);
    if (searched_tour_guide) {
      await Tour_guide.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Successfully Deleted Tour Guide" });
    } else {
      res.status(404).json({ msg: "Tour Guide not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
