const express = require("express");
const router = express.Router();
const searchByVehicleReg = require("../middleware/service/person/background/vehicle/searchByVehicleReg");

router.post("/getData/", function (req, res) {
    mainSearch.JsonToVehicleByReg(req.body).then(data => res.send((data[0])));
});

module.exports = router;