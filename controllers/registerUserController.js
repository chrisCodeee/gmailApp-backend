const { validateUser, GmailUSer } = require("../models/user");
const bcrypt = require("bcrypt");
const lodash = require("lodash");

const registerUserController = async (req, res) => {
	const { error } = validateUser(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await GmailUSer.findOne({ email: req.body.email });
	if (user) return res.status(400).send("User already registered");

	user = new GmailUSer(req.body);

	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(user.password, salt);

	await user.save();
	res.send(lodash.pick(user, ["_id", "name", "email"]));
};

module.exports = registerUserController;
