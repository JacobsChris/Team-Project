const express = require('express');
const jwt = require('jsonwebtoken');
const jwtKey = require('../middleware/auth/jwtConfig.json');
const loginAuth = require('../middleware/auth/loginAuth');
const passport = require('passport');
const userModel = require('../database/sequelize');

const router = express.Router();

router.post("/", passport.authenticate('login', {session: false}),

    function (req, res) {
        req.logIn(req.user, (error) => {
            if (error) {
                res.send("Error logging in" + error);
            } else if (!req.user) {
                res.status(401).send("Error, user not found");
            }

            userModel.findOne({ where: { username: req.user.username }})
                .then(result => {
                    const token = jwt.sign({ id: result.username }, jwtKey.secret, { expiresIn: 1800});
                    res.send({
                        auth: true,
                        token: "JWT" + " " + token,
                        message: "user logged in"
                    });
                });
        });
    }
);

module.exports = router;