const auth = require('../sqlauth.js');

module.exports = {
    findOutGoingCalls: function findOutGoingCalls(phoneNumber) {
        let sqlSearchString = "select *, count(receiverNumber) from mobileCallRecords where" +
            " callerNumber LIKE " + phoneNumber +
            " GROUP BY receiverNumber" +
            " ORDER BY COUNT(receiverNumber) DESC";
        return auth.SQLauthenticate(sqlSearchString)
    }

};


