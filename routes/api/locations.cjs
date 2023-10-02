const express = require("express");
const router = express.Router();
const locationsCtrl = require("../../controllers/api/locations.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

router.get("/", locationsCtrl.read_locations);
router.get("/:id", locationsCtrl.read_location);
router.post("/", ensureLoggedIn, locationsCtrl.create_location);
router.put("/:id", ensureLoggedIn, locationsCtrl.update_location);
router.delete("/:id", ensureLoggedIn, locationsCtrl.delete_location);

module.exports = router;
