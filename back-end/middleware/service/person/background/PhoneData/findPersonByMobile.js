const auth = require('../sqlauth.js');

module.exports = {
    findPersonByMobile: function findPersonByMobile(phoneNumber, limit) {
        let sqlSearchString = "SELECT * FROM mobiles WHERE" +
            " phoneNumber LIKE " + phoneNumber +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
