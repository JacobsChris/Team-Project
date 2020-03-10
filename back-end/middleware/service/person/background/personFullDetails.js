const mainSearch = require("../mainSearch");

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [], transactions = [],
        callHistory = [], acquaintances = [];

    [[citizen], [bankAccount], [mobiles], [vehicle]] = await mainSearch.JsonToStringDetails(input);

    for (let i = 0; i < bankAccount.length; i++) {
        bankDetails += bankAccount && bankAccount.length > 1 ? await mainSearch.JsonToStringBankDetails(bankAccount, 10) : [];
    }

    for (let i = 0; i < bankDetails.length; i++) {
        transactions += bankDetails && bankDetails.length > 1 ? await mainSearch.JsonToStringTransactions(bankDetails[0][0]) : [];
    }

    for (let i = 0; i < mobiles.length; i++) {
        callHistory += mobiles && mobiles.length > 1 ? await mainSearch.JsonToCallHistory(mobiles) : [];
    }
    for (let i = 0; i < callHistory.length; i++) {
        acquaintances += callHistory && callHistory.length > 1 ? await mainSearch.JsonToPersonByMobile(callHistory) : [];
    }

    return {
        "citizenData": citizen,
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