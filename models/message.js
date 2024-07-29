const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
	email: {
		type: String,
	},
	subject: {
		type: String,
	},
	body: {
		type: String,
	},

	date: {
		type: Date,
		default: Date.now,
	},
	sender: {
		type: String,
	},
});

const Messages = mongoose.model("messages", MessageSchema);

module.exports.Messages = Messages;
