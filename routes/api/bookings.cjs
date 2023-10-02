const express = require("express");
const router = express.Router();
const bookingsCtrl = require("../../controllers/api/bookings.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

router.post("/", ensureLoggedIn, bookingsCtrl.create_booking);
router.get("/", ensureLoggedIn, bookingsCtrl.read_bookings);
router.get("/:id", ensureLoggedIn, bookingsCtrl.read_booking);
router.get(
  "/customers/:customer_id",
  ensureLoggedIn,
  bookingsCtrl.read_customer_bookings
);
router.put("/:id", ensureLoggedIn, bookingsCtrl.update_booking);
router.delete("/:id", ensureLoggedIn, bookingsCtrl.delete_booking);

module.exports = router;
