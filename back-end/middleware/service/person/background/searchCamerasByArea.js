const auth = require('./sqlauth')


module.exports = {
    /**
     * @author  chris
     *
     * @function this function takes in an input
     *
     *  @return this function returns an JSON object to be passed up
     *
     *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
     * */
    searchCamerasByArea: function searchCamerasByArea(inputLatitude, inputLongitude, Radius) {
        let searchCameras = "select * from anprcamera where (((latitude - " + inputLatitude + ")*(latitude - " + inputLatitude + ") + (longitude - " + inputLongitude + ")*(longitude - " + inputLongitude + ")) < " + Radius + ")";
        auth.SQLauthenticate(searchCameras);
    }
};