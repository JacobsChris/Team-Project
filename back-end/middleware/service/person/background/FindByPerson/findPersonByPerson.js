const auth = require('../sqlauth.js');

module.exports = {
    findPersonByPerson: function findPersonByPerson(citizenID,forenames, surname, homeAddress, dateOfBirth,placeOfBirth,sex, limit) {
        let sqlSearchString = "SELECT * FROM citizen WHERE " +
            "citizenID LIKE " + citizenID +
            " AND forenames LIKE " + forenames +
            " AND surname LIKE " + surname +
            " AND homeAddress LIKE " + homeAddress +
            " AND dateOfBirth LIKE " + dateOfBirth +
            " AND placeOfBirth LIKE " + placeOfBirth +
            " AND sex LIKE " + sex +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString);
    }
};
