const { GmailUSer } = require("../models/user");
const bcrypt = require("bcrypt");
const lodash = require("lodash");

const registerUserController = async (req, res) => {
	let user = await GmailUSer.findOne({ username: req.body.username });
	if (user) return res.status(400).send("User already registered");

	user = new GmailUSer(req.body);

	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(user.password, salt);

	await user.save();
	res.send(lodash.pick(user, ["_id", "firstName", "username"]));
};

const updateUser = async (req, res) => {
	let user = await GmailUSer.findByIdAndUpdate(req.params._id, req.body, { new: true });
	// if (user) return res.status(400).send("User already registered");

	res.send(lodash.pick(user, ["_id", "firstName", "username"]));
};

module.exports.registerUserController = registerUserController;
module.exports.updateUser = updateUser;
