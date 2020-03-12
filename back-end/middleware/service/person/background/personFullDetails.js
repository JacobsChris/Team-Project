const mainSearch = require("../mainSearch");

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [], transactions = [],
        callHistory = [], acquaintances = [];

    [citizen, bankAccount, mobiles, vehicle] = await mainSearch.JsonToStringDetails(input);

    if (bankAccount != undefined) {
        for (let i = 0; i < bankAccount.length; i++) {
            let data = bankAccount && bankAccount.length >= 1 ? await mainSearch.JsonToStringBankDetails(bankAccount[i]) : [];
            bankDetails.push(data[0][0]);
        }
    }
    if (bankDetails != undefined) {
        for (let i = 0; i < bankDetails.length; i++) {
            let data = bankDetails && bankDetails.length >= 1 ? await mainSearch.JsonToStringTransactions(bankDetails[i]) : [];
            transactions.push(data[0][0]);
        }
    }
    if (mobiles != undefined) {
        for (let i = 0; i < mobiles.length; i++) {
            let data = mobiles && mobiles.length >= 1 ? await mainSearch.JsonToCallHistory(mobiles[i]) : [];
            callHistory.push(data[0][0]);
        }
    }
    if (callHistory != undefined) {
        for (let i = 0; i < callHistory.length; i++) {
            console.log(callHistory);
            let data = callHistory && callHistory.length >= 1 ? await mainSearch.JsonToPersonByMobile(callHistory[i], mobiles[0]) : [];
            acquaintances.push(data[0][0])
        }
    }
    return {
        "citizenData": citizen[0],
        "bankAccountData": bankAccount,
        "mobilesData": mobiles,
        "vehicleData": vehicle,
        "bankDetailsData": bankDetails,
        "transactionsData": transactions,
        "callHistoryData": callHistory,
        "acquaintancesData": acquaintances
    }


}
;