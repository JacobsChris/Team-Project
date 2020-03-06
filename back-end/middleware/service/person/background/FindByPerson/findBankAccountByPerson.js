const auth = require('../sqlauth.js');

module.exports = {
    findBankAccountByPerson: function findPersonsBankAccount(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT * FROM peoplebankaccount WHERE" +
            " forenames LIKE " + forenames +
            " AND surname LIKE " + surname +
            " AND homeAddress LIKE " + Addr +
            " AND dateOfBirth LIKE " + DoB +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString);
    }
};