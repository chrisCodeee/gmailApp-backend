const express = require("express");
const app = express();
require("./db/config");
const PORT = process.env.PORT || 8080;

app.use(require("cors")());
app.use(express.json());

app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
