const auth = require('../sqlauth.js');

module.exports =
    function findEPOSTerminal(eposId) {
        try {
            let sqlSearchString = "SELECT * FROM eposTerminals WHERE " +
                "id LIKE " + eposId;
            return auth(sqlSearchString)
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find epos terminal');
        }

    };