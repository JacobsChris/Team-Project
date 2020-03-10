const auth = require('../sqlauth.js');

module.exports = {
    findOutGoingCalls: function findOutGoingCalls(phoneNumber) {
        let sqlSearchString = "select *, count(callerNumber) from mobileCallRecords where" +
            " callerNumber LIKE " + phoneNumber +
            " GROUP BY receiverNumber" +
            " ORDER BY COUNT(callerNumber) DESC";
        return auth.SQLauthenticate(sqlSearchString)
    }

};

;
