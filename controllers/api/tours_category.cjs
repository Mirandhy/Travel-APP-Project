const Tour_category = require("../../models/tour_category.cjs");

module.exports = {
  create_tour_category,
  read_tour_category,
  update_tour_category,
  delete_tour_category,
};

async function create_tour_category(req, res) {
  try {
    // Add the tour_category to the database
    console.log(req.body);
    await Tour_category.create(req.body);
    res.status(200).json({ msg: "Successfully Created Tour Category" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_tour_category(req, res) {
  try {
    // Add the tour_category to the database
    let searched_tour_category = await Tour_category.findById(req.params.id);
    if (searched_tour_category) {
      res.status(200).json({ tour_category: searched_tour_category });
    } else {
      res.status(404).json({ msg: "Tour Category not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function update_tour_category(req, res) {
  try {
    console.log(req.body);
    let searched_tour_category = await Tour_category.findById(req.params.id);
    if (searched_tour_category) {
      await Tour_category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
      });
      res.status(200).json({ msg: "Successfully Updated Tour Category" });
    } else {
      res.status(404).json({ msg: "Tour Category not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function delete_tour_category(req, res) {
  try {
    console.log(req.body);
    let searched_tour_category = await Tour_category.findById(req.params.id);
    if (searched_tour_category) {
      await Tour_category.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Successfully Deleted Tour Category" });
    } else {
      res.status(404).json({ msg: "Tour Category not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
