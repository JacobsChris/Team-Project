const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const registerAuth = require('../middleware/auth/registerAuth');
const userModel = require('../database/sequelize');

const router = express.Router();
const saltRounds = 5;

router.post("/", passport.authenticate('register', {session: false}), 
    function (req, res) {
        
        const isAdmin = req.body.isAdmin;

        if (req.body.username === undefined) {
            res.status(400).send("Bad Request, username and password required");
        }
        
        userModel.findOne({where: {username: req.body.username}})
            .then(user => {
                if (user) {
                    res.status(202).send("username already taken");
                } 
                else {
                    
                    if (req.body.password.match(/[a-z]/g) && req.body.password.match(
                        /[A-Z]/g) && req.body.password.match(
                        /[0-9]/g) && req.body.password.match(
                        /[^a-zA-Z\d]/g) && req.body.password.length >= 8 && req.body.password.length <= 15) {

                        if (req.body.username.length >= 8 && req.body.username.length <= 15) {   
                            let hashedPassword = userModel.passwordHash(req.body.password);
                            userModel.create({username: req.body.username, password: hashedPassword, admin: isAdmin});
                            res.status(201).send("user is created");
                        } 
                        else {
                            return res.status(202).send("Username does not comply with requirements.")
                        }
                    } 
                    else {
                        return res.status(202).send("Password does not comply with requirements.")
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
);

module.exports = router;