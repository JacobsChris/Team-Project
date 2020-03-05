const express = require('express');
const jwt = require('jsonwebtoken');
const jwtKey = require('../middleware/auth/jwtConfig');
const userModel = require('../database/sequelize');
const loginAuth = require('../middleware/auth/loginAuth');

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
                res.status(401).send("Error logging in" + " " + error);
            }
            else {
                req.logIn(user, (error) => {
                        if (error) {
                            res.send("Error logging in" + " " + error);
                        }
                        userModel.findOne({ where: {username: user.username }})
                            .then(result => {
                                const token = jwt.sign({ id: result.username }, jwtKey.secret);
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