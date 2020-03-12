const express = require("express");
const morgan = require("../middleware/logging/dataAccessLogger");
const passport = require("passport");
const adminAuth = require('../middleware/auth/adminAuth');

const register = require("./register");
const getAllUsers = require("./getAllUsers");

const router = express.Router();
passport.use("admin", adminAuth);

router.use(morgan("combined"));
router.use(passport.authenticate("admin", {session : false}));

router.use("/register", register);
router.use("/getAllUsers", getAllUsers);

module.exports = router;