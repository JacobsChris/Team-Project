import {SQLauthenticate} from "./sqlauth";

module.exports = {
    findIncomingCalls: function findInComingCalls(phoneNumber, limit) {
        let sqlSearchString = "SELECT callerNumber, COUNT(*) FROM mobileCallRecords WHERE receiverNumber LIKE \'" + phoneNumber + "\' GROUP BY receiverNumber ORDER BY COUNT(*) DESC LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }

};

