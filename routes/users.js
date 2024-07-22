const express = require("express");
const registerUserController = require("../controllers/registerUserController");
const router = express.Router();

router.post("/register", registerUserController);

module.exports = router;
