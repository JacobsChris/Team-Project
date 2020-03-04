const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../../database/sequelize');

const router = express.Router();
const saltRounds = 5;

passport.use("register", new LocalStrategy(
    { 
        session: false 
    },
    function(username, password, done) {
        userModel.findOne({
            where: {
                username: username
            }
        })
        .then(user => {
            if (user != null) {
                return done(null, false, { message: 'username already taken' });
            }
            else {
                bcrypt.hash(password, saltRounds)
                    .then(hashedPass => {
                        userModel.create()
                    })
                return done(null, user);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
));