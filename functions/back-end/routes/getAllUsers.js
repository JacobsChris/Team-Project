const express = require('express');
const userModel = require('../database/sequelize');

const router = express.Router();

router.get("/", function(req, res) {
    userModel.findAll()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send("An error has occurred while fetching data" + " " + error);
        });
});

module.exports = router;
