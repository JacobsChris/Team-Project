const auth = require('../sqlauth.js');

module.exports =
     function findEPOSTerminal(eposId, limit) {
        let sqlSearchString = "SELECT * FROM eposTerminals WHERE " +
            "id LIKE " + eposId +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)

};