const express = require('express');
const jwt = require('jsonwebtoken');
const jwtKey = require('../middleware/auth/jwtConfig');
const loginAuth = require('../middleware/auth/loginAuth');
const passport = require("passport");
const userModel = require('../database/sequelize');


const router = express.Router();

router.post("/login", function(req, res, next) {
    passport.authenticate('login', { session: false },
        function(error, user, info) {
            if (error) {
                console.log(error);
                res.status(401).send("Error logging in" + " " + error);
            }
            else if (!user) {
                console.log(error);
                res.status(401).send("Error logging in, user not found");
            }
            else if (info != null) {
                res.send(info);
            }
            else {
                req.logIn(user, (error) => {
                        if (error) {
                            res.send("Error logging in" + " " + error);
                        }
                        userModel.findOne({ where: {username: user.username }})
                            .then(result => {
                                const token = jwt.sign({ id: result.username }, jwtKey.secret, { expiresIn: 1800 });
                                res.send({
                                    auth: true,
                                    token: token,
                                    message: "user logged in"
                                });
                            });
                    }
                );
            } 
    })(req, res, next);
});

module.exports = router;