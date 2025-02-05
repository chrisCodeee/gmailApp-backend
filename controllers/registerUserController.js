const { GmailUSer } = require("../models/user");
const bcrypt = require("bcrypt");
const lodash = require("lodash");

const checkEmail = async (req, res) => {
	let user = await GmailUSer.findOne({ username: req.body.username });
	if (user) return res.status(400).send("User already registered");

	res.send(lodash.pick(user, ["_id", "firstName", "lastName", "username"]));
	// res.send("Hello world");
};

const registerUserController = async (req, res) => {
	// let user = await GmailUSer.findByIdAndUpdate(req.params._id, req.body, { new: true });
	let user = new GmailUSer(req.body);

	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(user.password, salt);

	await user.save();
	res.send(lodash.pick(user, ["_id", "firstName", "lastName", "username"]));
};

module.exports.checkEmail = checkEmail;
module.exports.registerUserController = registerUserController;
