const auth = require('../../sqlauth')


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
     function searchGivenASingleANPRIdAndTime(anprId,intialTimeStamp,finalTimeStamp) {
        let searchCameras = "select * from vehicleObservations where (timestamp Between " + intialTimeStamp + " And " + finalTimeStamp +") AND ANPRPointId="+ anprId + ";";
        return auth.SQLauthenticate(searchCameras);

};