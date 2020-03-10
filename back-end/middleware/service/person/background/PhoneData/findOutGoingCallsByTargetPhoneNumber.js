const auth = require('../sqlauth.js');

module.exports = {
    findOutGoingCalls: function findOutGoingCalls(phoneNumber) {
        let sqlSearchString = "SELECT receiverNumber, COUNT(*) FROM mobileCallRecords WHERE" +
            " callerNumber LIKE " + phoneNumber +
            " GROUP BY callerNumber" +
            " ORDER BY COUNT(*) DESC";
        return auth.SQLauthenticate(sqlSearchString)
    }

};
