import {SQLauthenticate} from "../sqlauth";


module.exports = {
    findATMPoint: function findATMPoint(atmId, limit) {
        let sqlSearchString = "SELECT * FROM atmpoint WHERE atmId LIKE \'" + atmId + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};