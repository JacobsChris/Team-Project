const express = require("express");
const router = express.Router();
const mainSearch = require("../middleware/service/person/mainSearch");
const circleChecker = require("../middleware/service/person/background/LocationSearch/checksIfLatAndLongsAreWithinASetCircle");

router.post("/getLocationEventsInArea", async function (req, res) {
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let cell = [], cam = [], atm = [], epos = [];
    [[cell], [cam], [atm], [epos]] = await mainSearch.JsonToStringSearchByLocation(latitude, longitude, req.body.radius);

    let idObject = circleChecker.checkWithinRadius({latitude, longitude}, req.body.radius, cam, atm, cell, epos);

    await mainSearch.JsonToStringSearchByCellTowerAndTime(idObject, req.body.startTime, req.body.endTime)
});

module.exports = router;