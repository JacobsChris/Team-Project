const mainSearch = require("../mainSearch");

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [], transactions = {epos: [], atm: []},
        callHistory = [], acquaintances = [];

    [citizen, bankAccount, mobiles, vehicle] = await mainSearch.JsonToStringDetails(input);

    if (bankAccount != undefined) {
        for (let i = 0; i < bankAccount.length; i++) {
            let data = bankAccount && bankAccount.length >= 1 ? await mainSearch.JsonToStringBankDetails(bankAccount[i]) : [];
            bankDetails.push(data[0][0]);
        }
    }
    for (let details of bankDetails) {
        const data = await mainSearch.JsonToStringTransactions(details);
        transactions.epos = data[0];
        transactions.atm = data[1];
        console.log(data);
    }
    // if (mobiles != undefined) {
    //     for (let i = 0; i < mobiles.length; i++) {
    //         let data = mobiles && mobiles.length >= 1 ? await mainSearch.JsonToCallHistory(mobiles[i]) : [];
    //         callHistory.push(data[0]);
    //     }
    // }
    // if (callHistory != undefined) {
    //     for (let i = 0; i < callHistory[0].length; i++) {
    //         let data = callHistory && callHistory.length >= 1 ? await mainSearch.JsonToPersonByMobile(callHistory[0][i], mobiles) : [];
    //         acquaintances.push(data[0][0])
    //     }
    // }
    return {
        "citizenData": citizen[0],
        "bankAccountData": bankAccount,
        "mobilesData": mobiles,
        "vehicleData": vehicle,
        "bankDetailsData": bankDetails,
        "transactionsData": transactions,
        "callHistoryData": callHistory[0],
        "acquaintancesData": acquaintances
    }


}
;