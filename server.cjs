require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

// Connect to database
require("./config/database.cjs");

const app = express();

// Middleware
//  logger middleware to log requests
app.use(logger("dev"));
// middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "dist")));

// checkToken Middleware. (Sets the req.user & req.exp properties on the request object)
app.use(require("./config/checkToken.cjs"));

// Put API routes here, before the "catch all" route
app.get("/api/test", (req, res) => {
  res.send("You just hit a API route");
});

const userRouter = require("./routes/api/users.cjs");
const locationRouter = require("./routes/api/locations.cjs");
const bookingRouter = require("./routes/api/bookings.cjs");
const tourRouter = require("./routes/api/tours.cjs");
const tourGuideRouter = require("./routes/api/tours.cjs");

//User Router
app.use("/api/users", userRouter);
app.use("/api/locations", locationRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/tours", tourRouter);
app.use("/api/tours-guide", tourGuideRouter);

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// Send the built and compiled React code to the browser
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
