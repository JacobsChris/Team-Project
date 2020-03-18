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
        let intialTimeStampInput = req.body.startTime;
        let finalTimeStampInput = req.body.endTime;
        let limit = req.body.limit;
        const [cam, atm, cell, epos] = await searchByLocation(latitude, longitude, req.body.radius);

        let idObject = await checksIfLatAndLongsAreWithinASetCircle({
            latitude,
            longitude
        }, req.body.radius, cam, atm, cell, epos);
        console.log(idObject)
        let returnStatement = await searchLocationsByIdAndTime(idObject, intialTimeStampInput, finalTimeStampInput,limit)
            .then(result => {
                res.send(result);
            })
            .catch(error => {
                res.send("An error has occurred while fetching data" + " " + error);
            });
        return returnStatement;
    } catch (e) {
        console.info(e);
        console.info(e.name);
        console.info(e.message);
        throw new Error('error occured in location event')
    }

});

module.exports = router;