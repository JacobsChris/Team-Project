const express = require("express");
const router = express.Router();

const mainSearch = require('../middlewear/service/person/mainSearch.js')
const morgan = require("../middleware/logging/logger");
const test = require("../middleware/service/personService.js");


router.use(morgan);

router.get("/getData/", function (req, res, next) {
    res.send(mainSearch.JsonToStringName(req.body.requestData));

    next()
});

router.get("/getMatching/");


module.exports = router;