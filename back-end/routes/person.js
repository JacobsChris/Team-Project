const express = require("express");
const router = express.Router();

const personFullDetails = require("../middleware/service/person/background/personFullDetails");
const mainSearch = require("../middleware/service/person/mainSearch");
const morgan = require("../middleware/logging/logger");


router.use(morgan);

router.get("/getData/", function (req, res) {
    mainSearch.JsonToStringName(req.query).then(data => res.send((data)));
});

router.get("/getMatching/", function (req, res) {
    personFullDetails(req.query).then(data => res.send(data));
});


module.exports = router;