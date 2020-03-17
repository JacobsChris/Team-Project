const auth = require('../sqlauth.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns returns the numbers called by the given inputted phone number
     */
    function findOutGoingCalls(input) {
        let sqlSearchString = "select receiverNumber from mobileCallRecords where" +
            " callerNumber LIKE " + exactStr(input.phoneNumber) +
            " GROUP BY receiverNumber" +
            " ORDER BY COUNT(receiverNumber) DESC";
        return auth(sqlSearchString)


    };


