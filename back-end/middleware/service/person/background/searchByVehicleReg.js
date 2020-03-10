const wildStr = require("./inputvalidation/wildStr");

const auth = require('./sqlauth.js');
const {licencePlateValidator} = require("../../../../../back-end/middleware/service/person/background/inputvalidation/licencePlateValidator");

module.exports = {
    /**
     * @author  chris
     *
     * @function this function takes in an input
     *
     *  @return this function returns an JSON object to be passed up
     *
     *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
     * */
    searchByVehicleReg: function searchByVehicleReg(vehicleReg, limit) {
        vehicleReg = licencePlateValidator(vehicleReg);
        if (vehicleReg !== "Invalid Reg No") {

            let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
                "vehicleRegistrationNo LIKE " + vehicleReg +
                " LIMIT " + limit;
            return auth.SQLauthenticate(sqlSearchString);
        } else {
            return vehicleReg;
        }
    }
};
