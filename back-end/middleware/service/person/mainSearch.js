const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');
const findBankCardByAccountId = require('./background/Financial/findDetailsByBankAccount');
const findTransactionsByBankCard = require('./background/Financial/findTransactionsByBankCard.js');
const findATMPointByATMId = require('./background/Financial/findDetailsByATMId.js');


module.exports = {

    /**
     * @return an array like Advanced Detail Search in order of citizen { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE',sex: 'Male' }
     * @requires this at the end of the function to get @return .then(([citizen]) => { console.log("Advanced Detail Search in order of citizen" , citizen); });
     * */
    JsonToStringName: function JsonToStringName(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
    },
    /**
     * @return an array like Advanced Detail Search in order of citizen [ { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE', sex: 'Male' } ]
     Advanced Detail Search BankAccount []
     Advanced Detail Search Mobile []
     Advanced Detail Search vehicle []
     *@requires this at the end to get @return .then(([Citizen, BankAccount, Mobiles, vehicle]) => { console.log("Advanced Detail Search in order of citizen" , Citizen,
        "Advanced Detail Search BankAccount", BankAccount,
        "Advanced Detail Search Mobile", Mobiles
        ,"Advanced Detail Search vehicle", vehicle); });
     * */
    JsonToStringDetails: function JsonToStringDetails(input) {
        return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);

    },
    /**
     * @return an array like { bankcardId: 353, cardNumber: 4298912572327611.5, sortCode: '36-40-95', bankAccountId: 84038, accountNumber: 89228899, bank: 'Clydesdale Bank' }
     * @requires this at the end to get @return }).then(([bankaccount]) => {console.log("Advanced Detail Search in order of citizen" , bankaccount); });
     * */
    JsonToStringBankDetails: function JsonToStringBankDetails(input) {
        return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress)
    },

    /**
     *  @return an array like Advanced Detail findEPOSTransactions{ timestamp: 2015-05-01T14:37:24.000Z, eposId: 49178, bankCardNumber: 8257821168691391, payeeAccount: 26996565, amount: 59.5 }..and more
     *          Advanced Detail findATMTransactions {{ timestamp: 2015-05-01T14:37:23.000Z, atmId: 5436, bankCardNumber: 4722912624353299, type: 'Cash Withdrawal', amount: 120 }
     *  @requires this at the end to get @return }).then(([findEPOSTransactions,findATMTransactions]) => { console.log("Advanced Detail findEPOSTransactions" , findEPOSTransactions, "Advanced Detail findATMTransactions",findATMTransactions);})
     *  */
    JsonToStringTransactions: function JsonToStringTransactions(input){
        return findTransactionsByBankCard.findTransactionsByBankCard(input.bankcardId,input.cardNumber,input.sortCode,input.bankAccountId,input.accountNumber,input.bank,5)
    },

    JsonToStringATM: function JsonToStringATM(input){
        return findATMPointByATMId.findATMPointByATMId(input.timestamp,input.atmId,input.bankCardNumber,input.type,input.amount,5)
    }
};











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Debugging Zone  /////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringName(input) {
//     return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
// }
//
// JsonToStringName(    {
//     "citizenID": "",
//     "forenames": "Stuart",
//     "surname": "white",
//     "homeAddress": "",
//     "dateOfBirth": "",
//     "placeOfBirth": "",
//     "sex": "Male"
// }).then(([citizen]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , citizen);
// });

// function JsonToStringDetails(input) {
//     return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
// }
// JsonToStringDetails(
//     {
//         "citizenID": "1135544248",
//         "forenames": "",
//         "surname": "",
//         "homeAddress": "",
//         "dateOfBirth": "",
//         "placeOfBirth": "",
//         "sex": ""
//     }
// ).then(([Citizen, BankAccount, Mobiles, vehicle]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , Citizen,
//         "Advanced Detail Search BankAccount", BankAccount,
//         "Advanced Detail Search Mobile", Mobiles
//         , "Advanced Detail Search vehicle", vehicle);
// });

// function JsonToStringBankDetails(input) {
//     return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress,"5")
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

// function JsonToStringTransactions(input){
//     return findTransactionsByBankCard.findTransactionsByBankCard(input.bankcardId,input.cardNumber,input.sortCode,input.bankAccountId,input.accountNumber,input.bank,5)
// }
//
// JsonToStringTransactions({
//     "bankcardId": "353",
//     "cardNumber": "",
//     "sortCode": "",
//     "bankAccountId": "",
//     "accountNumber": "",
//     "bank": ""
// }).then(([findEPOSTransactions,findATMTransactions]) => {
//     console.log("Advanced Detail findEPOSTransactions" , findEPOSTransactions, "Advanced Detail findATMTransactions",findATMTransactions);
// })

// function JsonToStringATM(input){
//     return findATMPointByATMId.findATMPointByATMId(input.timestamp,input.atmId,input.bankCardNumber,input.type,input.amount,5)
// }
// JsonToStringATM({ "timestamp": "2015-05-01T14:37:23.000Z",
//     "atmId": "5436",
//     "bankCardNumber": "4722912624353299",
//     "type": "Cash Withdrawal",
//     "amount": "120"
// }).then(([ATMPoint]) => {
//     console.log("Advanced Detail ATMPoint" , ATMPoint);
// });