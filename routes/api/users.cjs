const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs");

router.post("/", usersCtrl.create_user);
router.get("/:id", ensureLoggedIn, usersCtrl.read_user);
router.put("/:id", ensureLoggedIn, usersCtrl.update_user);
router.delete("/:id", ensureLoggedIn, usersCtrl.delete_user);

// /api/users/login
router.post("/login", usersCtrl.login);

router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
