const auth = require('../sqlauth.js');


module.exports = {
    /**
     * @author Anthony Wilkinson & Chris
     *
     * @function this function takes an input from the function findDetailsByATMId comprised of which is the atmId and the limit
     * which is hardcoded for the moment
     *
     * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
     * for more info) and then returns it here.
     *
     * This is then passed up to findDetailsByATMId
     *
     * @return this returns a JSON object from the MYSQL database
     *
     * @requires this function requires a string input selected from findDetailsByATMId to function
     * */
    findATMPoint: function findATMPoint(atmId, limit) {
        let sqlSearchString = "SELECT * FROM atmpoint WHERE" +
            " atmId LIKE " + atmId +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
