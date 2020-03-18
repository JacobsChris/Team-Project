const auth = require('../sqlauth.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns returns the numbers called by the given inputted phone number
     */
    function findOutGoingCalls(input) {
        try {
            let sqlSearchString = "select * from mobileCallRecords where" +
                " callerNumber LIKE " + exactStr(input.phoneNumber);
            // " GROUP BY receiverNumber" +
            // " ORDER BY COUNT(receiverNumber) DESC";
            return auth(sqlSearchString)
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find outgoing calls by target phone number');
        }

    };


