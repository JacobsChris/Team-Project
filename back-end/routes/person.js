const express = require("express");
const router = express.Router();
const test = require("../middleware/service/personService.js");


router.use(function (req, res, next) {

    //Auth

    console.log("Auth passed");
    next()
}, function (req, res, next) {

    //Validation

    console.log("Validation passed");
    next()
}, function (req, res, next) {

    //Service

    console.log("Service passed");
    next()
});

router.get("/getData/", function (req, res, next) {
    res.send(test(true));

    console.log("Response done");
    next()
});

router.get("/getMatching/");


module.exports = router;