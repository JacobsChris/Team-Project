const express = require("express");
const router = express.Router();
const searchByVehicleReg = require("../middleware/service/vehicle/searchByVehicleReg");

router.post("/getData/", function (req, res) {

    searchByVehicleReg(req.body).then(data => res.send((data)));
});

module.exports = router;