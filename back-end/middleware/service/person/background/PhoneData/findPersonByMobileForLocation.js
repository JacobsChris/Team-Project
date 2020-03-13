const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports =
    /**
     *
     * @param input
     * @param mobiles
     * @returns promised information about the owner of a given phone number
     */
    async function findPersonByMobileForLocation(input, mobiles) {
        let aqNumber;
        for (let phone of mobiles) {

            if (input.receiverNumber == phone.phoneNumber) {
                aqNumber = wildStr(input.callerNumber);
            }else{
                aqNumber = wildStr(input.receiverNumber);
            }
        }

        let sqlSearchString = "SELECT * FROM mobiles WHERE" +
            " phoneNumber LIKE " + aqNumber;
        return await auth(sqlSearchString);

    };
