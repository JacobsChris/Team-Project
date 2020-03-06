import {SQLauthenticate} from "../sqlauth";

module.exports = {
    findEPOSTerminal: function findEPOSTerminal(eposId, limit) {
        let sqlSearchString = "SELECT * FROM eposTerminals WHERE id LIKE \'" + eposId + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};