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
    function searchGivenAEposIdAndTime(eposId, intialTimeStamp, finalTimeStamp, limit) {
        try {
            if(limit !== undefined) {
                let searchCameras = "select * from eposTransactions where (timestamp Between " + intialTimeStamp +
                    " And " + finalTimeStamp + ") AND eposId=" + eposId + "Limit " + limit;
                return auth(searchCameras);
            }
            else{
                let searchCameras = "select * from eposTransactions where (timestamp Between " + intialTimeStamp +
                    " And " + finalTimeStamp + ") AND eposId=" + eposId + "Limit 10000";
                return auth(searchCameras);
            }
        }
        catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at search given a epos id and a time');
        }
    };