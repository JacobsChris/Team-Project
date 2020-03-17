const auth = require('../sqlauth');

module.exports =
    /**
     * @author  Anthony
     *
     * @function this function takes in an input
     *
     *  @return this function returns an JSON object to be passed up
     *
     *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
     * */
     function searchCellTowerByArea(inputLatitude, inputLongitude, Radius,minLat,maxLat,minLon,maxLon) {
        let searchCameras = "select * from celltower where (latitude Between "
            + minLat +
            " And " +
            maxLat +
            ") And (longitude Between " + minLon + " And " + maxLon +");";
        return auth(searchCameras);

};





