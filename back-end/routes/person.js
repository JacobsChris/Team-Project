const express = require("express");
const router = express.Router();

const morgan = require("../middleware/logging/logger");
const test = require("../middleware/service/personService.js");


router.use(morgan);

router.get("/getData/", function (req, res, next) {
    res.send(test(true));

    next()
});

router.get("/getMatching/");


module.exports = router;