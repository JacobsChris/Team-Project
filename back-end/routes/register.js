const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../database/sequelize');

const router = express.Router();
const saltRounds = 5;

router.post("/", function (req, res) {
    userModel.findOne({ where: { username: req.body.username }})
        .then(user => {
            if (user) {
                res.status(202).send("username already taken");
            } 
            else {
                bcrypt.hash(req.body.password, saltRounds)
                    .then(result => {
                        userModel.create({ username: username, password: result });
                    });
                res.status(201).send("user is created");
            }
        })
        .catch(error => {
            console.log(error);
        });

});

module.exports = router;