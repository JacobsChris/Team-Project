const geolib = require("geolib");

module.exports = {
    checkWithinRadius: function checkWithinRadius(center, rad, cam, atm, cell, epos) {

        let camIds = [], atmIds = [], cellIds = [], eposIds = [];


        if (!cam) {
        } else {

            for (let i = 0; i < cam.length; i++) {
                let latitude = cam[i].latitude;
                let longitude = cam[i].longitude;
                if (geolib.isPointWithinRadius({latitude: latitude, longitude: longitude}, center, rad)) {
                    camIds.push(cam[i])

                }
            }
        }

        if (!atm) {
        } else {
            for (let i = 0; i < atm.length; i++) {
                let latitude = atm[i].latitude;
                let longitude = atm[i].longitude;
                if (geolib.isPointWithinRadius({latitude: latitude, longitude: longitude}, center, rad)) {
                    atmIds.push(atm[i])
                }
            }
        }

        if (!cell) {
        } else {
            for (let i = 0; i < cell.length; i++) {
                let latitude = cell[i].latitude;
                let longitude = cell[i].longitude;
                if (geolib.isPointWithinRadius({latitude: latitude, longitude: longitude}, center, rad)) {
                    cellIds.push(cell[i])
                }
            }
        }

        if (!epos) {
        } else {
            for (let i = 0; i < epos.length; i++) {
                let latitude = epos[i].latitude;
                let longitude = epos[i].longitude;
                if (geolib.isPointWithinRadius({latitude: latitude, longitude: longitude}, center, rad))
                    eposIds.push(epos[i])
            }
        }

        return {anprId: camIds, atmId: atmIds, cellTowerID: cellIds, eposId: eposIds}

    }

};


