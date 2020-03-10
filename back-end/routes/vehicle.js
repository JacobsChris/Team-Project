const express = require("express");
const router = express.Router();

const mainSearch = require("../middleware/service/person/mainSearch");

router.post("/getData/", function (req, res) {
    mainSearch.JsonToVehicleByReg(req.body).then(data => res.send((data)));
});

module.exports = router;