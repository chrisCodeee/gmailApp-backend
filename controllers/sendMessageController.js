const { Messages } = require("../models/message");
const { GmailUSer } = require("../models/user");

const sendMessage = async (req, res) => {
	// const user = await GmailUSer.findOne({ username: req.body.email });

	let message = new Messages(req.body);
	await message.save();

	res.send(message);
};

const getMessage = async (req, res) => {
	const user = await Messages.find({ email: req.params.email }).sort({ date: -1 });
	// const user = await Messages.find();

	res.send(user);
};

module.exports.sendMessage = sendMessage;
module.exports.getMessage = getMessage;
