const auth = require('../sqlauth.js');


module.exports = {
    findATMPoint: function findATMPoint(atmId, limit) {
        let sqlSearchString = "SELECT * FROM atmpoint WHERE" +
            " atmId LIKE " + atmId +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
