const auth = require('../../sqlauth');


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
    function searchGivenASingleANPRIdAndTime(anprId, intialTimeStamp, finalTimeStamp, limit) {
        if (limit !== undefined) {
            let searchCameras = "select * from vehicleObservations where (timestamp Between " + intialTimeStamp + " And " + finalTimeStamp + ") AND ANPRPointId=" + anprId + " " +
                "Limit " + limit + ";";
            return auth(searchCameras);
        } else {
            let searchCameras = "select * from vehicleObservations where (timestamp Between " + intialTimeStamp + " And " + finalTimeStamp + ") AND ANPRPointId=" + anprId + " " +
                "Limit 10000;";
            return auth(searchCameras);
        }



    };