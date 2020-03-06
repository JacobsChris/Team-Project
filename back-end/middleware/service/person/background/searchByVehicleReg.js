const {Sequelize} = require('sequelize');
const addWildStr = require('./inputvalidation/wildStr.js');
const SQLauthenticate = require('./sqlauth.js');
const {QueryTypes} = require('sequelize');
const {licencePlateValidator} = require("../../../../../back-end/middleware/service/person/background/inputvalidation/licencePlateValidator");


module.exports = {
    searchByVehicleReg: function searchByVehicleReg(vehicleReg, limit) {
        vehicleReg = licencePlateValidator(vehicleReg);
        if (!(vehicleReg !== "vehicleReg")) {
            vehicleReg = addWildStr(vehicleReg.toUpperCase());
            let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE vehicleRegistrationNo LIKE" + vehicleReg + " LIMIT " + limit;
            return SQLauthenticate(sqlSearchString)
        } else {
            console.log("here");
            return vehicleReg;
        }
    }
};

searchByVehicleReg("____ ___", 10);