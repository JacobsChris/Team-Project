const auth = require('../sqlauth.js');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns the phone numbers that hav called the given input phone number
     */
     function findInComingCalls(phoneNumber) {
        let sqlSearchString = "select *, count(callerNumber) from mobileCallRecords where" +
            " receiverNumber LIKE " + phoneNumber +
            " GROUP BY callerNumber" +
            " ORDER BY COUNT(callerNumber) DESC";
        return auth(sqlSearchString)
};
