const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

const login = require("./back-end/routes/login");
const dataAccess = require("./back-end/routes/dataAccess");
const port = 8080;


app.use(cors());
app.use(express.json());

app.use(passport.initialize());

passport.serializeUser((user, done) => {
    done(null, user);
});


app.use(bodyParser.json());

app.use("/back-end", dataAccess);
app.use("/login", login);

//app.listen(port);

exports.apiBackend = functions.https.onRequest(app);
