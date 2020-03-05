const express = require('express');
const jwt = require('jsonwebtoken');
const jwtKey = require('../middleware/auth/jwtConfig');
const userModel = require('../database/sequelize');
const passport = require('passport');
const endpointAuth = require('../middleware/auth/endpointAuth');

const router = express.Router();

router.get('/home', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send({
            auth: true,
            message: "authenticated for this endpoint"
        });
    }
);

module.exports = router;