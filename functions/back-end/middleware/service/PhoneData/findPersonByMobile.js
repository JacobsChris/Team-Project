const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports =
    /**
     *
     * @param input
     * @param mobiles
     * @returns promised information about the owner of a given phone number
     */
    function findPersonByMobile(input, mobiles) {
        let aqNumber;
        // for (let phone of mobiles) {
        //
        //     if (input.receiverNumber === phone.phoneNumber) {
        //         aqNumber = wildStr(input.callerNumber);
        //     } else {
        //         aqNumber = wildStr(input.receiverNumber);
        //     }
        // }
        if ((input.callerNumber === undefined) && input.receiverNumber) {
            aqNumber = wildStr(input.receiverNumber);
        }
        if ((input.receiverNumber === undefined) && input.callerNumber) {
            aqNumber = wildStr(input.callerNumber);
        }

        let sqlSearchString = "SELECT * FROM mobiles WHERE" +
            " phoneNumber LIKE " + aqNumber;
        return Promise.all([auth(sqlSearchString)]);

    }
;
