const express = require("express");
const router = express.Router();

const personFullDetails = require("../middleware/service/person/background/personFullDetails");
const mainSearch = require("../middleware/service/person/mainSearch");


router.post("/getData/", function (req, res) {
    mainSearch.JsonToStringName(req.body).then(data => res.send((data)));

});

router.post("/getMatching/", function (req, res) {
    personFullDetails(req.body).then(data => res.send(data));
});


module.exports = router;