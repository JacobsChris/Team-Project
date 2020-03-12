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
    function searchGivenAEposIdAndTime(eposId, intialTimeStamp, finalTimeStamp) {
        let searchCameras = "select * from eposTransactions where (timestamp Between " + intialTimeStamp + " And " + finalTimeStamp + ") AND eposId=" + eposId + ";";
        return auth.SQLauthenticate(searchCameras);
    };