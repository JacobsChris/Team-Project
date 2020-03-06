const {Sequelize} = require('sequelize');
const {SQLauthenticate} = require('./sqlauth.js');
const {QueryTypes} = require('sequelize');
const {licencePlateValidator} = require("../../../../../back-end/middleware/service/person/background/inputvalidation/licencePlateValidator");
const {addWildStr} = require("./inputvalidation/wildStr");

module.exports = {
    searchByVehicleReg: function searchByVehicleReg(vehicleReg, limit) {
        vehicleReg = licencePlateValidator(vehicleReg);
        if (vehicleReg !== "vehicleReg") {
            vehicleReg = addWildStr(vehicleReg.toUpperCase());
            let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE vehicleRegistrationNo LIKE" + vehicleReg + " LIMIT " + limit;
            SQLauthenticate(sqlSearchString)
        } else {
            console.log("here");
            console.log(vehicleReg);
            return vehicleReg;
        }
    }
};
