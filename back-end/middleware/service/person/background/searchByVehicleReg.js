const auth = require('./sqlauth.js');
const {licencePlateValidator} = require("../../../../../back-end/middleware/service/person/background/inputvalidation/licencePlateValidator");

module.exports = {
    searchByVehicleReg: function searchByVehicleReg(vehicleReg, limit) {
        vehicleReg = licencePlateValidator(vehicleReg);
        if (vehicleReg !== "Invalid Reg No") {
            let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
                "vehicleRegistrationNo LIKE " + vehicleReg +
                " LIMIT " + limit;
            return auth.SQLauthenticate(sqlSearchString);
        } else {
            // console.log("here");
            // console.log(vehicleReg);
            return vehicleReg;
        }
    }
};
