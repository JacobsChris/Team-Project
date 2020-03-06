const auth = require('../sqlauth.js');

module.exports = {
    findBankAccountByPerson: function findPersonsBankAccount(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT * FROM peoplebankaccount WHERE forenames LIKE \'" + forenames + "\' AND surname LIKE \'" + surname + "\' AND address LIKE \'" + Addr + "\' AND dateOfBirth LIKE \'" + DoB + "\' LIMIT " + 5;
        console.log(auth.SQLauthenticate(sqlSearchString));
        return auth.SQLauthenticate(sqlSearchString);

        // returns a persons bank account
    }
};