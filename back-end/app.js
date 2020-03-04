const express = require("express");
const app = express();
const person = require("./routes/person");
const port = 3000;


app.use("/person", person);

app.listen(port);