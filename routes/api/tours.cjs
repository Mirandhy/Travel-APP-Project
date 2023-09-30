const express = require("express");
const router = express.Router();
const toursCtrl = require("../../controllers/api/tours.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

router.post("/", ensureLoggedIn, toursCtrl.create_tour);
router.get("/", ensureLoggedIn, toursCtrl.read_tours);
router.get("/:id", ensureLoggedIn, toursCtrl.read_tour);
router.put("/:id", ensureLoggedIn, toursCtrl.update_tour);
router.delete("/:id", ensureLoggedIn, toursCtrl.delete_tour);

module.exports = router;
