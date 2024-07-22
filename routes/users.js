const express = require("express");
const { registerUserController, updateUser } = require("../controllers/registerUserController");
const router = express.Router();

router.post("/register", registerUserController);
router.put("/register/:_id", updateUser);

module.exports = router;
