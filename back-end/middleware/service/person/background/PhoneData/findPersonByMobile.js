const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports = {
    /**
     *
     * @param phoneNumber
     * @returns promised information about the owner of a given phone number
     */
    findPersonByMobile: function findPersonByMobile(phoneNumber) {
        phoneNumber = wildStr.addWildStr(phoneNumber);
        let sqlSearchString = "SELECT * FROM mobiles WHERE" +
            " phoneNumber LIKE " + phoneNumber;
        return Promise.all([auth.SQLauthenticate(sqlSearchString)]);
    }
};
