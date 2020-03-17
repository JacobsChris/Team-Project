const auth = require('../sqlauth.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns the phone numbers that hav called the given input phone number
     */
    function findInComingCalls(input) {
        let sqlSearchString = "select callerNumber from mobileCallRecords where" +
            " receiverNumber LIKE " + exactStr(input.phoneNumber) +
            " GROUP BY callerNumber" +
            " ORDER BY COUNT(callerNumber) DESC";
        return auth(sqlSearchString)
    };
