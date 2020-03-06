const express = require("express");
const router = express.Router();
const passport = require("passport");

const jwt = require('jsonwebtoken');
const jwtKey = require('../middleware/auth/jwtConfig');
const userModel = require('../database/sequelize');
const endpointAuth = require('../middleware/auth/endpointAuth');



const mainSearch = require("../middleware/service/person/mainSearch");
const morgan = require("../middleware/logging/logger");

router.use(passport.authenticate("jwt", {session : false}));
router.use(morgan);


router.get("/getData/", function (req, res, next) {
    mainSearch.JsonToStringName(req.body["requestData"]).then(response => res.send((response)));
});

router.get("/getMatching/");


module.exports = router;