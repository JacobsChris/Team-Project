const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports =
    /**
     *
     * @param phoneNumber
     * @returns promised information about the owner of a given phone number
     */
    function findPersonByMobile(input, mobiles) {
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
        return Promise.all([auth(sqlSearchString)]);

    }
;
