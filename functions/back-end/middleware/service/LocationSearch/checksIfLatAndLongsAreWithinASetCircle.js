const geolib = require("geolib");

module.exports =
    function checkWithinRadius(center, rad, cam, atm, cell, epos) {
        try {

            let camIds = [], atmIds = [], cellIds = [], eposIds = [];
            let vars = [cam, atm, cell, epos];
            let values = [camIds, atmIds, cellIds, eposIds];

            for (let j = 0; j < vars.length; j++) {
                if (!vars[j]) {
                } else {

                    for (let i = 0; i < cam.length; i++) {
                        let latitude = cam[i].latitude;
                        let longitude = cam[i].longitude;
                        if (geolib.isPointWithinRadius({latitude: latitude, longitude: longitude}, center, rad)) {
                            values[j].push(cam[i])

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
                    console.log(atmIds)
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
                    console.log(cellIds)
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
        }
        catch (e) {
            console.info(e.name);
            console.info(e.message);
            throw "An error occurred on checking if things are within the stated circle"

        }
    };


