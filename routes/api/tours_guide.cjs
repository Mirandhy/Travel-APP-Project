const express = require("express");
const router = express.Router();
const toursGuideCtrl = require("../../controllers/api/tours_guide.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

router.post("/", ensureLoggedIn, toursGuideCtrl.create_tour_guide);
router.get("/:id", ensureLoggedIn, toursGuideCtrl.read_tour_guide);
router.put("/:id", ensureLoggedIn, toursGuideCtrl.update_tour_guide);
router.delete("/:id", ensureLoggedIn, toursGuideCtrl.delete_tour_guide);

module.exports = router;
