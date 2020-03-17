const auth = require('../sqlauth.js');

module.exports =
     function findEPOSTerminal(eposId) {
             let sqlSearchString = "SELECT * FROM eposTerminals WHERE " +
                 "id LIKE " + eposId;
             return auth(sqlSearchString)

     };