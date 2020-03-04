const express = require("express");
const router = express.Router();

const test = require("../middleware/service/personService.js");



router.get("/getData/", function (req, res, next) {
    res.send(test(true));

    console.log("Response done");
    next()
});

router.get("/getMatching/");


module.exports = router;