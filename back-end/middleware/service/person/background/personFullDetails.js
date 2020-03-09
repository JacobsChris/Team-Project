const mainSearch = require("../mainSearch");

module.exports = async function (input) {

    let citizen;
    let bankAccount;
    let mobiles;
    let vehicle;
    let bankDetails;
    let transactions;

    await mainSearch.JsonToStringDetails(input).then(([Citizen, BankAccount, Mobiles, Vehicle]) => {
        citizen = Citizen;
        bankAccount = BankAccount;
        mobiles = Mobiles;
        vehicle = Vehicle;
    });

    await mainSearch.JsonToStringBankDetails(bankAccount[0]).then((BankDetails) => {
        bankDetails = BankDetails;
    });

    await mainSearch.JsonToStringTransactions(bankDetails[0][0]).then((Transactions) => {
        transactions = Transactions;
    });

    return {
        "citizenData": citizen,
        "bankAccountData": bankAccount,
        "mobilesData": mobiles,
        "vehicleData" : vehicle,
        "bankDetailsData" : bankDetails,
        "transactionsData" : transactions}

};