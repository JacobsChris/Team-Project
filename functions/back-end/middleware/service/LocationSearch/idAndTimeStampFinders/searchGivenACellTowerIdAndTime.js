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
    function searchGivenACellTowerIdAndTime(cellTowerId, intialTimeStamp, finalTimeStamp, limit) {
        try {
            if (limit !== undefined) {
                const searchCameras = "select * from mobileCallRecords where (timestamp Between " + intialTimeStamp + " And " + finalTimeStamp + ") AND callCellTowerId=" + cellTowerId + " limit " + limit;
                return auth(searchCameras);
            } else {
                const searchCameras = "select * from mobileCallRecords where (timestamp Between " + intialTimeStamp + " And " + finalTimeStamp + ") AND callCellTowerId=" + cellTowerId + " limit 10000;";
                return auth(searchCameras);
            }
        }
        catch (err) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at search given a cell tower id and a time');
        }

    };