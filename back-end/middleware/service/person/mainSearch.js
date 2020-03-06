const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');
const findBankCardByAccountId = require('./background/Financial/findDetailsByBankAccount')


module.exports = {
    JsonToStringName: function JsonToStringName(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
    },
    JsonToStringDetails: function JsonToStringDetails(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);

    },
    JsonToStringBankDetails: function JsonToStringBankDetails(input) {
        return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress)
    }
};


// function JsonToStringDetails(input) {
//     return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
//
// }
//
// JsonToStringDetails(
//     {
//         "citizenID": "",
//         "forenames": "Stuart",
//         "surname": "",
//         "homeAddress": "",
//         "dateOfBirth": "",
//         "placeOfBirth": "",
//         "sex": "Male"
//     }
// ).then(([Citizen, BankAccount, Mobiles, vehicle]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , Citizen,
//         "Advanced Detail Search BankAccount", BankAccount,
//         "Advanced Detail Search Mobile", Mobiles
//         ,"Advanced Detail Search vehicle", vehicle);
// });
function JsonToStringBankDetails(input) {
    return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress,5)
}.then(([bankcard]) =>{
    console.log(bankcard);
})
JsonToStringBankDetails({
    "bankAccountId": "226471",
    "accountNumber": "69527899",
    "bank": "The Co-operative Bank",
    "forenames": "Kevin Stuart",
    "surname": "Dixon",
    "dateOfBirth": "1957-08-03",
    "homeAddress": "26 CHURCH LANE, LOUGHTON, IG10 1PD"
});

