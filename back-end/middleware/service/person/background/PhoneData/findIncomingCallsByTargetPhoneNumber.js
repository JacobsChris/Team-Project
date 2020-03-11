const auth = require('../sqlauth.js');

module.exports = {
    findIncomingCalls: function findInComingCalls(phoneNumber) {
        let sqlSearchString = "select *, count(callerNumber) from mobileCallRecords where" +
            " receiverNumber LIKE " + phoneNumber +
            " GROUP BY callerNumber" +
            " ORDER BY COUNT(callerNumber) DESC";
        return auth.SQLauthenticate(sqlSearchString)
    }
};
