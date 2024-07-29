const express = require("express");
const { sendMessage, getMessage } = require("../controllers/sendMessageController");

const router = express.Router();

router.post("/sendmessage", sendMessage);
router.get("/getmessage/:email", getMessage);

module.exports = router;
