import {SQLauthenticate} from "./sqlauth";

module.exports = {
    findIncomingCalls: function findOutGoingCalls(phoneNumber, limit) {
        let sqlSearchString = "SELECT receiverNumber, COUNT(*) FROM mobileCallRecords WHERE callerNumber LIKE \'" + phoneNumber + "\' GROUP BY callerNumber ORDER BY COUNT(*) DESC LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }

};
