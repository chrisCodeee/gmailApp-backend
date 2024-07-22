const mongoose = require("mongoose");
require("dotenv").config();

const MongoUrl = process.env.MONGODB_URL;

mongoose
	.connect(`${MongoUrl}`)
	.then(() => console.log("Connected to MongoDB.............."))
	.catch((err) => console.log(`Could not connect to MongoDB: ${err}`));
