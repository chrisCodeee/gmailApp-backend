const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const GmailUserSchema = mongoose.Schema({
	firstName: {
		type: String,
		minlenght: 3,
		maxlenght: 255,
	},
	lastName: {
		type: String,
		minlenght: 3,
		maxlenght: 255,
	},
	DOB: {
		type: String,
	},
	gender: {
		type: String,
	},
	customGender: {
		type: String,
	},
	referGender: {
		type: String,
	},
	username: {
		type: String,
		trim: true,
		lowercase: true,
		// unique: true,
	},

	recoveryEmailAddress: String,

	phoneNumber: {
		type: String,
	},
	password: {
		type: String,
		minlenght: 3,
		maxlenght: 1024,
	},
});

const GmailUSer = mongoose.model("GmailUser", GmailUserSchema);

module.exports.GmailUSer = GmailUSer;
