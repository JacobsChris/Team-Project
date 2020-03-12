const express = require("express");
const morgan = require("../middleware/logging/dataAccessLogger");
const passport = require("passport");

// const jwt = require('jsonwebtoken');
// const jwtKey = require('../middleware/auth/jwtConfig.json');
// const userModel = require('../database/sequelize');
const adminAuth = require('../middleware/auth/adminAuth');

const register = require("./register");
const getAllUsers = require("./getAllUsers");

const router = express.Router();


router.use(morgan);
router.use(passport.authenticate("admin", {session : false}));

router.use("/register", register);
router.use("/getAllUsers", getAllUsers);

module.exports = router;