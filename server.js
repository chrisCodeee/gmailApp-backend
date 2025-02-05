const express = require("express");
const app = express();
const path = require("path");
require("./db/config");
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));

app.use(require("cors")());
app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/", require("./routes/messages"));

// app.listen(PORT, "0.0.0.0", () => console.log(`App started on port ${PORT}`));
app.listen(PORT, () => console.log(`App started on port ${PORT}`));
