const express = require("express");
const app = express();
const person = require("./routes/person");
const user = require("./routes/user");
const vehicle = require("./routes/vehicle");
const locationEvent = require("./routes/locationEvent");
const port = 3000;


app.use("/login", user);
app.use("/back-end/person", person);
app.use("/back-end/vehicle", vehicle);
app.use("/back-end/locationEvent", locationEvent);


app.listen(port);