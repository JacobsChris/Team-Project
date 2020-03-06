const express = require("express");
const router = express.Router();

const mainSearch = require("../middleware/service/person/mainSearch");

router.get("/getData/", function (req, res, next) {
    mainSearch.JsonToStringName(req.query).then(response => res.send((response)));
});

router.get("/getMatching/");


module.exports = router;