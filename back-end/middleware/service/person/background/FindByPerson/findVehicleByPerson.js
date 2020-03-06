const auth = require('../sqlauth.js');

module.exports = {
    findVehicleByPerson: function findVehicleByPerson(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
            "forenames LIKE " + forenames +
            " AND surname LIKE " + surname +
            " AND address LIKE " + Addr +
            " AND dateOfBirth LIKE " + DoB +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString);
    }
};