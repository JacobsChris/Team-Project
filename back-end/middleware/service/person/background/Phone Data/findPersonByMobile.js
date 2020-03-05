import {SQLauthenticate} from "../sqlauth";

module.exports = {
    findIncomingCalls: function findPersonByMobile(phoneNumber, limit) {
        let sqlSearchString = "SELECT * FROM mobiles WHERE phoneNumber LIKE \'" + phoneNumber + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};
