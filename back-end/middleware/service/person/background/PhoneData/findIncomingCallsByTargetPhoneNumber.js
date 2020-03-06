const auth = require('../sqlauth.js');

module.exports = {
    findIncomingCalls: function findInComingCalls(phoneNumber, limit) {
        let sqlSearchString = "SELECT callerNumber, COUNT(*) FROM mobileCallRecords WHERE receiverNumber LIKE \'" + phoneNumber + "\' GROUP BY receiverNumber ORDER BY COUNT(*) DESC LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};

