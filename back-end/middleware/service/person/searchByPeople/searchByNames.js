const {Sequelize} = require('sequelize');
const wildStr = require('../wildStr.js');
const auth = require('../sqlauth.js')
const {QueryTypes} = require('sequelize');

module.exports = {
    searchByNames: function searchByNames(forenames, surname, limit) {
        if (typeof forenames != 'string') {
            console.log("Not string error");
        } else {
            forenames = wildStr.addWildStr(forenames);
            surname = wildStr.addWildStr(surname);
            let sqlSearchString = "SELECT * FROM citizen WHERE forenames LIKE " + forenames + " AND surname LIKE " + surname + " LIMIT " + limit;
            auth.SQLauthenticate(sqlSearchString)
        }
    }
};