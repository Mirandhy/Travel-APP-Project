const express = require("express");
const router = express.Router();
const tourCategoryCtrl = require("../../controllers/api/locations.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

router.post("/", ensureLoggedIn, tourCategoryCtrl.create_tour_category);
router.get("/", tourCategoryCtrl.read_tour_categories);
router.get("/:id", ensureLoggedIn, tourCategoryCtrl.create_tour_category);
router.put("/:id", ensureLoggedIn, tourCategoryCtrl.create_tour_category);
router.delete("/:id", ensureLoggedIn, tourCategoryCtrl.create_tour_category);

module.exports = router;
