const express = require("express");
const router = express.Router();
const circleChecker = require("../middleware/service/LocationSearch/checksIfLatAndLongsAreWithinASetCircle");
const searchByLocation = require("../middleware/service/LocationSearch/SearchByLocation");
const checksIfLatAndLongsAreWithinASetCircle = require("../middleware/service/LocationSearch/checksIfLatAndLongsAreWithinASetCircle");
const searchLocationsByIdAndTime = require("../middleware/service/LocationSearch/searchLocationsByIdAndTime");

router.post("/getLocationEventsInArea", async function (req, res) {
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let cell = [], cam = [], atm = [], epos = [];
    [[cell], [cam], [atm], [epos]] = await searchByLocation(latitude, longitude, req.body.radius);

    let idObject = checksIfLatAndLongsAreWithinASetCircle({latitude, longitude}, req.body.radius, cam, atm, cell, epos);

    await searchLocationsByIdAndTime(idObject, req.body.startTime, req.body.endTime)
});

module.exports = router;