const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

const person = require("./routes/person");
const login = require("./routes/login");
const vehicle = require("./routes/vehicle");
const locationEvent = require("./routes/locationEvent");
const port = 8080;


app.use(express.json());
app.use(passport.initialize());

passport.serializeUser( function(user, done) {
    done(null, user);
});




app.use(bodyParser.json());

app.use("/login", login);
app.use("/back-end/person", person);
app.use("/back-end/vehicle", vehicle);
app.use("/back-end/locationEvent", locationEvent);


app.listen(port);