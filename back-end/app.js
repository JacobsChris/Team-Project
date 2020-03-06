const express = require("express");
const app = express();
const passport = require("passport");

const login = require("./routes/login");
const dataAccess = require("./routes/dataAccess");
const port = 3000;


app.use(passport.initialize());

passport.serializeUser( function(user, done) {
    done(null, user);
});



app.use("/back-end", dataAccess);
app.use("/login", login);


app.listen(port);