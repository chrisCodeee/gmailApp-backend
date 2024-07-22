const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const GmailUserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlenght: 3,
		maxlenght: 255,
	},
	email: {
		type: String,
		required: true,
		minlenght: 3,
		maxlenght: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlenght: 3,
		maxlenght: 1024,
	},
});

const GmailUSer = mongoose.model("GmailUser", GmailUserSchema);

const passwordComplexityOptions = {
	min: 8,
	max: 30,
	lowerCase: 1,
	upperCase: 1,
	numeric: 1,
	symbol: 1,
	// requirementCount: 4,
};

function validateUser(user) {
	const schema = Joi.object({
		name: Joi.string().min(3).max(255).required().messages({
			"string.empty": "Name is required",
		}),
		email: Joi.string().min(3).max(255).required().email().messages({
			"string.empty": "Email is required",
		}),
		password: passwordComplexity(passwordComplexityOptions).required().messages({
			"string.empty": "Enter your password",
		}),
		confirmPassword: Joi.string().required().messages({
			"string.empty": "Confirm your password",
		}),
	});

	return schema.validate(user);
}

module.exports.validateUser = validateUser;
module.exports.GmailUSer = GmailUSer;
