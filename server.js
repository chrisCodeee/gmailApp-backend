const express = require("express");
const app = express();
require("./db/config");
const PORT = process.env.PORT || 8080;

app.use(require("cors")());
app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/", require("./routes/messages"));

app.listen(PORT, "0.0.0.0", () => console.log(`App started on port ${PORT}`));
