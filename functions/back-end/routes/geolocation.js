const express = require('express');
const searchLocationsByIdAndTime = require('../middleware/service/LocationSearch/searchLocationsByIdAndTime');

const router = express.Router();

router.post("/getLocationByIdAndTime", function(req, res) {
    searchLocationsByIdAndTime(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
});

module.exports = router;

