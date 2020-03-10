const auth = require('../sqlauth.js');

module.exports = {
    findIncomingCalls: function findInComingCalls(phoneNumber) {
        let sqlSearchString = "SELECT callerNumber, COUNT(*) FROM mobileCallRecords WHERE" +
            " receiverNumber LIKE " + phoneNumber
            + " GROUP BY receiverNumber" +
            " ORDER BY COUNT(*) DESC";
        return auth.SQLauthenticate(sqlSearchString)
    }
};

