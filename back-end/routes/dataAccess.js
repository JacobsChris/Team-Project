const express = require("express");
const router = express.Router();
const morgan = require("../middleware/logging/dataAccessLogger");
const passport = require("passport");

const jwt = require('jsonwebtoken');
const jwtKey = require('../middleware/auth/jwtConfig');
const userModel = require('../database/sequelize');
const endpointAuth = require('../middleware/auth/endpointAuth');

const person = require("./person");
const vehicle = require("./vehicle");
const locationEvent = require("./locationEvent");



router.use(morgan);
// router.use(passport.authenticate("jwt", {session : false}));


router.use("/person", person);
router.use("/vehicle", vehicle);
router.use("/locationEvent", locationEvent);

module.exports = router;