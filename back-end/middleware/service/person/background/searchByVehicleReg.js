import {SQLauthenticate} from "./sqlauth";
import {addWildStr} from "./inputvalidation/wildStr";

const {Sequelize} = require('sequelize');
const wildStr = require('./inputvalidation/wildStr.js');
const auth = require('./sqlauth.js');
const {QueryTypes} = require('sequelize');


module.exports = {
    searchByVehicleReg: function searchByVehicleReg(vehicleReg, limit) {
        if (licencePlateValidator(vehicleReg)) {
            vehicleReg = addWildStr(vehicleReg.toUpperCase());
            let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE vehicleRegistrationNo LIKE" + vehicleReg + " LIMIT " + limit;
            SQLauthenticate(sqlSearchString)
        } else {
            console.log("invalid reg")
        }
    }
};