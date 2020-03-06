const auth = require('../sqlauth.js');

module.exports = {
    findOutGoingCalls: function findOutGoingCalls(phoneNumber, limit) {
        let sqlSearchString = "SELECT receiverNumber, COUNT(*) FROM mobileCallRecords WHERE callerNumber LIKE \'" + phoneNumber + "\' GROUP BY callerNumber ORDER BY COUNT(*) DESC LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }

};
