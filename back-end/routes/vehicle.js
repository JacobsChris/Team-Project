const express = require("express");
const router = express.Router();

const mainSearch = require("../middleware/service/person/mainSearch");



router.get("/getData/", function (req, res) {

    mainSearch.JsonToVehicleByReg(req.query).then(data => res.send((data)));

});

router.get("/getMatching/", function (req, res) {


});



module.exports = router;