const {Sequelize} = require('sequelize');
const wildStr = require('./wildStr.js');
const auth = require('./sqlauth.js')
const {QueryTypes} = require('sequelize');

module.exports = {
    searchByVehicleReg: function searchByVehicleReg(vehicleReg, limit) {
        if (typeof vehicleReg != 'string') {
            console.log("Not string error");
        } else {
            vehicleReg = "'%" + vehicleReg + "%'";
            let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE vehicleRegistrationNo LIKE" + vehicleReg + " LIMIT " + limit;
            auth.SQLauthenticate(sqlSearchString)
        }
    }
};