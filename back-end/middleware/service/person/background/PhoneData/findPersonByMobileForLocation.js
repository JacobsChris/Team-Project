const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports =
    /**
     *
     * @param input
     * @param mobiles
     * @returns promised information about the owner of a given phone number
     */
    async function findPersonByMobileForLocation(input, limit) {
        debugger;
        let aqNumber;
        try {
            if (input.receiverNumber == input.callerNumber) {
                aqNumber = wildStr(input.callerNumber);
            } else {
                aqNumber = wildStr(input.receiverNumber);
            }

            if (limit !== undefined) {
                let sqlSearchString = "SELECT * FROM mobiles WHERE" +
                    " phoneNumber LIKE " + aqNumber + " limit " + limit;
                return await auth(sqlSearchString);

            } else {
                let sqlSearchString = "SELECT * FROM mobiles WHERE" +
                    " phoneNumber LIKE " + aqNumber + " limit 100000";
                return await auth(sqlSearchString);
            }
        } catch (e) {
            throw "error encountered in find person by mobile for location"
        }
    };
