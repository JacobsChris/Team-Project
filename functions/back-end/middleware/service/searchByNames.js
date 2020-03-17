// const {Sequelize} = require('sequelize');
// const wildStr = require('./inputvalidation/wildStr.js');
// const exactStr = require('./inputvalidation/exactStr');
// const stringChecker = require("./inputvalidation/stringChecker");
// const auth = require('./sqlauth.js');
// const {QueryTypes} = require('sequelize');
//
// module.exports =
//     /**
//      *  @author Anthony Wilkinson & Chris
//      *  @function this function obtains an input originally from a JSON, deconstructs the incomming data into citizenID,
//      *  forenames, surname, homeAddress, dateOfBirth, Sex and a Limit which is hardcoded for the time being to be 5 total. The
//      *  function then turns these input parameters into a MYSQL search string for sqlauth to querry the database. wildstr and
//      *  exactstr allow for a LIKE or an exact match. There is a small issue with sex as like male returns both male and female.
//      *  @development this function could be further split into 2 functions so that it would output the contents of intended for
//      *  the MYSQL querry are constructed elsewhere. In addition there would need to be a detection of the input was blank and do
//      *  a like match for sex and an exact match if something is inputted to stop the bug.
//      *  @return this function returns an JSON object to be passed up
//      *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
//      *  */
//     function searchByNames(citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex) {
//         citizenID = stringChecker(citizenID);
//         forenames = stringChecker(forenames);
//         surname = stringChecker(surname);
//         homeAddress = stringChecker(homeAddress);
//         dateOfBirth = stringChecker(dateOfBirth);
//         placeOfBirth = stringChecker(placeOfBirth);
//
//         if (sex === "") {
//             sex = wildStr.addWildStr(sex);
//         } else {
//             sex = exactStr.addExactStr(sex);
//         }
//
//         let sqlSearchString = "SELECT * FROM citizen WHERE " +
//             "citizenID LIKE " + citizenID +
//             " AND forenames LIKE " + forenames +
//             " AND surname LIKE " + surname +
//             " AND homeAddress LIKE " + homeAddress +
//             " AND dateOfBirth LIKE " + dateOfBirth +
//             " AND placeOfBirth LIKE " + placeOfBirth +
//             " AND sex LIKE " + sex;
//         return auth.SQLauthenticate(sqlSearchString)
//
//
// };
const stringChecker = require("./inputvalidation/stringChecker");
const wildStr = require("./inputvalidation/wildStr");
const exactStr = require("./inputvalidation/exactStr");

module.exports =
    /**
     *  @author Anthony Wilkinson & Chris
     *  @function this function obtains an input originally from a JSON, deconstructs the incomming data into citizenID,
     *  forenames, surname, homeAddress, dateOfBirth, Sex and a Limit which is hardcoded for the time being to be 5 total. The
     *  function then turns these input parameters into a MYSQL search string for sqlauth to querry the database. wildstr and
     *  exactstr allow for a LIKE or an exact match. There is a small issue with sex as like male returns both male and female.
     *  @development this function could be further split into 2 functions so that it would output the contents of intended for
     *  the MYSQL querry are constructed elsewhere. In addition there would need to be a detection of the input was blank and do
     *  a like match for sex and an exact match if something is inputted to stop the bug.
     *  @return this function returns an JSON object to be passed up
     *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
     *  */
    function searchByNames(citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex) {
        citizenID = stringChecker(citizenID);
        forenames = stringChecker(forenames);
        surname = stringChecker(surname);
        homeAddress = stringChecker(homeAddress);
        dateOfBirth = stringChecker(dateOfBirth);
        placeOfBirth = stringChecker(placeOfBirth);

        if (sex === "") {
            sex = wildStr(sex);
        } else {
            sex = exactStr(sex);
        }

        let sqlSearchString = "SELECT * FROM citizen WHERE " +
            "citizenID LIKE " + citizenID +
            " AND forenames LIKE " + forenames +
            " AND surname LIKE " + surname +
            " AND homeAddress LIKE " + homeAddress +
            " AND dateOfBirth LIKE " + dateOfBirth +
            " AND placeOfBirth LIKE " + placeOfBirth +
            " AND sex LIKE " + sex;
        return auth.SQLauthenticate(sqlSearchString);
};
