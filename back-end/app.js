const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

const login = require("./routes/login");
const dataAccess = require("./routes/dataAccess");
const port = 3000;


app.use(express.json());
app.use(passport.initialize());

passport.serializeUser( function(user, done) {
    done(null, user);
});

app.use(bodyParser.json());

app.use("/back-end", dataAccess);
app.use("/login", login);


app.listen(port);