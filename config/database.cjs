// config/database.js
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
try {

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
db.on("disconnected", function () {
  console.log(`Disconnected`);
});
} catch (error) {
    throw error;
}
module.exports = db;