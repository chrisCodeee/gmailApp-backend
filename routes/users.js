const express = require("express");
const { registerUserController, checkEmail } = require("../controllers/registerUserController");
const { loginUserEmailController, loginUserPasswordController } = require("../controllers/loginUserController");

const router = express.Router();

router.post("/checkEmail", checkEmail);
router.post("/register", registerUserController);

router.post("/checkloginemail", loginUserEmailController);
router.post("/checkloginpassword", loginUserPasswordController);

module.exports = router;
