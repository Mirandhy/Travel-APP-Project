const User = require("../../models/user.cjs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create_user,
  read_user,
  update_user,
  delete_user,
  login,
  checkToken,
};

async function create_user(req, res) {
  try {
    // Add the user to the database
    console.log(req.body);
    await User.create(req.body);
    res.status(200).json({ msg: "Successfully Created User" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function read_user(req, res) {
  try {
    // Add the user to the database
    let searched_user = await User.findById(req.params.id);
    if (searched_user) {
      res.status(200).json({ user: searched_user });
    } else {
      res.status(404).json({ msg: "User not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function update_user(req, res) {
  try {
    console.log(req.body);
    let searched_user = await User.findById(req.params.id);
    if (searched_user) {
      await User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        dob: new Date(req.body.dob),
        phone_number: req.body.phone_number,
        address: req.body.address,
      });
      res.status(200).json({ msg: "Successfully Updated User" });
    } else {
      res.status(404).json({ msg: "User not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function delete_user(req, res) {
  try {
    console.log(req.body);
    let searched_user = await User.findById(req.params.id);
    if (searched_user) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "Successfully Deleted User" });
    } else {
      res.status(404).json({ msg: "User not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // Query our database to find a user with the email provided
    // Using filter object to find User with the given email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("User Not Found");
    // if we found the email, compare password
    // 1st argument from the credentials that the user typed in
    // 2nd argument what's stored in the database
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();

    const token = createJWT(user);

    res.status(200).json({ msg: "Successfully Logged In", token: token });
  } catch (err) {
    console.log(err);
    res.status(400).json("Bad Crendentials");
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log(req.user);
  //sending the expiration date to the client (frontend)
  res.json(req.exp);
}

/*-- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
