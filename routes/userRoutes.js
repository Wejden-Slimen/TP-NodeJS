const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");

router.route("/all").get(userController.getAllUsers);

module.exports = router;