const { Messages } = require("../models/message");

const deleteMessage = async (req, res) => {
	const messageId = await Messages.findByIdAndDelete(req.params.id);

	if (!messageId) return res.status(404).send("The message with the given ID was not found.");

	res.send(messageId);
};

module.exports = deleteMessage;
