const auth = require('../sqlauth.js');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns returns the numbers called by the given inputted phone number
     */
     function findOutGoingCalls(phoneNumber) {
        let sqlSearchString = "select *, count(receiverNumber) from mobileCallRecords where" +
            " callerNumber LIKE " + phoneNumber +
            " GROUP BY receiverNumber" +
            " ORDER BY COUNT(receiverNumber) DESC";
        return auth(sqlSearchString)


};


