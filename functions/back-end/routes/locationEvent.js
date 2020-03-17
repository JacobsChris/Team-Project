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
    console.log("here chris");
    // await searchLocationsByIdAndTime(idObject, req.body.startTime, req.body.endTime)
    const inputObj = {};
    if (req.body.anprId !== undefined){
        inputObj.anprId = req.body.anprId;
    }
    else if(req.body.atmId !== undefined){
        inputObj.atmId = req.body.atmId;
    }
    else if(req.body.cellTowerId !== undefined){
        inputObj.cellTowerId = req.body.cellTowerId;
    }
    else if(req.body.eposId !== undefined){
        inputObj.eposId = req.body.eposId;
    }
    else{
        throw "error encountered at function locationEvent, please enter a valid id type of anpr, epos, atm or cellTower";
    }
    inputObj.latitude = req.body.latitude;
    inputObj.longitude = req.body.longitude;
    inputObj.initialTimeStamp = req.body.startTime;
    inputObj.finalTimeStamp = req.body.endTime;
    console.log(inputObj);
    await searchLocationsByIdAndTime(inputObj)
});

module.exports = router;