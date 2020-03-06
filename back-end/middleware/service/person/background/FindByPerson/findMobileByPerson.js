const auth = require('../sqlauth.js');

module.exports = {
    findMobileByPerson: function findMobileByPerson(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT * FROM mobiles WHERE " +
            "forenames LIKE " + forenames +
            " AND surname LIKE " + surname +
            " AND address LIKE " + Addr +
            " AND dateOfBirth LIKE " + DoB +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString);
    }
};
