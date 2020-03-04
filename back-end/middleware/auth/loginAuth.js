// const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtKey = require('./jwtConfig');
const userModel = require('../../database/sequelize');

// const router = express.Router();

passport.use("login", new LocalStrategy(

    function(username, password, done) {
        userModel.findOne({ where: { username: username }})
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            else if (password != user.password) {
                return done(null, false, { message: "Incorrect password" });
            }
            else {
                return done(null, user);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
));

// for testing 
// router.post("/login", function(req, res, next) {
//     passport.authenticate('login', { session: false },
//         function(error, user, info) {
//             if (error) {
//                 console.log(error);
//                 res.status(401).send("Error logging in" + " " + error);
//             }
//             else if (!user) {
//                 console.log(error);
//                 res.status(401).send("Error logging in" + " " + error);
//             }
//             else {
//                 req.logIn(user, (error) => {
//                         if (error) {
//                             res.send("Error logging in" + " " + error);
//                         }
//                         userModel.findOne({ where: {username: user.username }})
//                             .then(result => {
//                                 const token = jwt.sign({ id: result.username }, jwtKey.secret);
//                                 res.send({
//                                     auth: true,
//                                     token: token,
//                                     message: "user logged in"
//                                 });
//                             });
//                     }
//                 );
//             } 
//     })(req, res, next);
// });

module.exports = router;

// bcrypt.compare(password, user.password)
//                     .then(result => {
//                         if (!result) {
//                             return done(null, false, {message: "Incorrect password."});
//                         }
//                         return done(null, user);
//                 });
