const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');
const findBankCardByAccountId = require('./background/Financial/findDetailsByBankAccount')


module.exports = {

    JsonToStringName: function JsonToStringName(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
    },
    /**
     * @return an array like Advanced Detail Search in order of citizen [ { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE', sex: 'Male' } ]
     Advanced Detail Search BankAccount []
     Advanced Detail Search Mobile []
     Advanced Detail Search vehicle []
     @requires this at the end to get @return .then(([Citizen, BankAccount, Mobiles, vehicle]) => { console.log("Advanced Detail Search in order of citizen" , Citizen,
        "Advanced Detail Search BankAccount", BankAccount,
        "Advanced Detail Search Mobile", Mobiles
        ,"Advanced Detail Search vehicle", vehicle);
});
     * */
    JsonToStringDetails: function JsonToStringDetails(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);

    },
    /**
     * @return an array like { bankcardId: 353, cardNumber: 4298912572327611.5, sortCode: '36-40-95', bankAccountId: 84038, accountNumber: 89228899, bank: 'Clydesdale Bank' }
     * @requires this at the end to get @return }).then(([bankaccount]) => {console.log("Advanced Detail Search in order of citizen" , bankaccount); });
     * */
    JsonToStringBankDetails: function JsonToStringBankDetails(input) {
        return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress)
    }
};








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Debugging Zone  ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringDetails(input) {
//     return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
//
// }
//
// JsonToStringDetails(
//     {
//         "citizenID": "",
//         "forenames": "Stuart",
//         "surname": "white",
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
// function JsonToStringBankDetails(input) {
//     return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress,5)
// }
// JsonToStringBankDetails({
//     "bankAccountId": "84038",
//     "accountNumber": "",
//     "bank": "",
//     "forenames": "",
//     "surname": "",
//     "dateOfBirth": "",
//     "homeAddress": ""
// }).then(([bankaccount]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , bankaccount);
// });

