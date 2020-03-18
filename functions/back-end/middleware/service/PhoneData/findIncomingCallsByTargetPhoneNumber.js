const auth = require('../sqlauth.js');
const exactStr = require('../inputvalidation/exactStr');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns the phone numbers that hav called the given input phone number
     */
    function findInComingCalls(input) {
        try {
            let sqlSearchString = "select * from mobileCallRecords where" +
                " receiverNumber LIKE " + exactStr(input.phoneNumber);
            // " GROUP BY callerNumber" +
            // " ORDER BY COUNT(callerNumber) DESC";
            return auth(sqlSearchString)
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find incoming calls by target phone number');
        }
    };
