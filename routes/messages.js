const express = require("express");
const { sendMessage, getMessage } = require("../controllers/sendMessageController");
const deleteMessage = require("../controllers/deleteMessageController");

const router = express.Router();

router.post("/sendmessage", sendMessage);
router.get("/getmessage/:email", getMessage);
router.delete("/deletemessage/:id", deleteMessage);

module.exports = router;
