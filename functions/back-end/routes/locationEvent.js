const express = require("express");
const router = express.Router();
const circleChecker = require("../middleware/service/LocationSearch/checksIfLatAndLongsAreWithinASetCircle");
const searchByLocation = require("../middleware/service/LocationSearch/SearchByLocation");
const checksIfLatAndLongsAreWithinASetCircle = require("../middleware/service/LocationSearch/checksIfLatAndLongsAreWithinASetCircle");
const searchLocationsByIdAndTime = require("../middleware/service/LocationSearch/searchLocationsByIdAndTime");

router.post("/getLocationEventsInArea", async function (req, res) {
    try {
        let latitude = req.body.latitude;
        let longitude = req.body.longitude;
        const [cam, atm, cell, epos] = await searchByLocation(latitude, longitude, req.body.radius);

        let idObject = await checksIfLatAndLongsAreWithinASetCircle({
            latitude,
            longitude
        }, req.body.radius, cam, atm, cell, epos);

        return await searchLocationsByIdAndTime(idObject);
    }
    catch (e) {
        console.info(e.name);
        console.info(e.message);
    }

});

module.exports = router;