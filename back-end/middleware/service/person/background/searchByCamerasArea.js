import {SQLauthenticate} from "./sqlauth";


module.exports = {
    searchByVehicleReg: function searchByCamerasArea(inputLatitude, inputLongitude, Radius, limit) {
        let searchCameras = "select * from anprcamera where (((latitude - " + inputLatitude + ")*(latitude - " + inputLatitude + ") + (longitude - " + inputLongitude + ")*(longitude - " + inputLongitude + ")) < " + Radius + ") LIMIT" + limit;
        SQLauthenticate(searchCameras);
    }
};