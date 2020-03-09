const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports = {
    findPersonByMobile: function findPersonByMobile(phoneNumber, limit) {
        phoneNumber = wildStr.addWildStr(phoneNumber);
        let sqlSearchString = "SELECT * FROM mobiles WHERE" +
            " phoneNumber LIKE " + phoneNumber +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
