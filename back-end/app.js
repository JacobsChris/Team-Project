const express = require("express");
const app = express();
const person = require("./routes/person");
const user = require("./routes/user");
const port = 3000;



app.use("/back-end/person", person);

app.use("/login", user);

app.listen(port);