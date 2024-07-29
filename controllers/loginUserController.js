const { GmailUSer } = require("../models/user");
const bcrypt = require("bcrypt");
const lodash = require("lodash");

const loginUserEmailController = async (req, res) => {
	const user = await GmailUSer.findOne({ username: req.body.username });
	if (!user) return res.status(400).send("Couldn't find your Google Account");

	res.send(lodash.pick(user, ["_id", "firstName", "lastName", "username"]));

	// const token = await user.generateAuthToken();
	// if (!token) res.send("Something went wrong!");

	// res.send({ user, token });
};

const loginUserPasswordController = async (req, res) => {
	const user = await GmailUSer.findOne({ username: req.body.username });

	const validPassword = await bcrypt.compare(req.body.password.trim(), user.password);
	if (!validPassword) return res.status(400).send("Wrong password. Try again or click Forgot password to reset it");

	res.send(lodash.pick(user, ["_id", "firstName", "lastName", "username"]));

	// const token = await user.generateAuthToken();
	// if (!token) res.send("Something went wrong!");

	// res.send({ user, token });
};

module.exports.loginUserEmailController = loginUserEmailController;
module.exports.loginUserPasswordController = loginUserPasswordController;
