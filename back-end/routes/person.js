const express = require("express");
const router = express.Router();
const findPersonByPerson = require("../middleware/service/person/background/FindByPerson/findPersonByPerson");

const personFullDetails = require("../middleware/service/person/background/personFullDetails");


router.post("/getData/", function (req, res) {
    findPersonByPerson(req.body).then(data => res.send((data)));

});

router.post("/getMatching/", function (req, res) {
    personFullDetails(req.body).then(data => res.send(data));
});


module.exports = router;