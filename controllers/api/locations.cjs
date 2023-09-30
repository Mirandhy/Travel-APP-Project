const Location = require("../../models/location.cjs");

module.exports = {
  create_location,
  read_location,
  read_locations,
  update_location,
  delete_location,
};

async function create_location(req, res) {
  try {
    // Add the location to the database
    console.log(req.body);
    await Location.create(req.body);
    res.status(200).json({ msg: "Successfully Created Location" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_location(req, res) {
  try {
    // Add the location to the database
    let searched_location = await Location.findById(req.params.id);
    if (searched_location) {
      res.status(200).json({ location: searched_location });
    } else {
      res.status(404).json({ msg: "Location not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_locations(req, res) {
  try {
    // Add the location to the database
    let searched_locations = await Location.find({});
    res.status(200).json({ locations: searched_locations });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function update_location(req, res) {
  try {
    console.log(req.body);
    let searched_location = await Location.findById(req.params.id);
    if (searched_location) {
      await Location.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        country: req.body.country,
        description: req.body.description,
        image_url: req.body.image_url,
        map_cordinates: req.body.map_cordinates,
      });
      res.status(200).json({ msg: "Successfully Updated Location" });
    } else {
      res.status(404).json({ msg: "Location not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function delete_location(req, res) {
  try {
    console.log(req.body);
    let searched_location = await Location.findById(req.params.id);
    if (searched_location) {
      await Location.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Successfully Deleted Location" });
    } else {
      res.status(404).json({ msg: "Location not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
