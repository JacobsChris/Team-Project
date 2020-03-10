const mainSearch = require("../mainSearch");

module.exports = async function (input) {

        const [[citizen], [bankAccount], [mobiles], [vehicle]] = await mainSearch.JsonToStringDetails(input);
        const bankDetails = bankAccount && bankAccount.length > 1 ? await mainSearch.JsonToStringBankDetails(bankAccount, 10) : [];
        const transactions = bankDetails && bankDetails.length > 1 ? await mainSearch.JsonToStringTransactions(bankDetails[0][0]) : [];
        const calls = mobiles && mobiles.length > 1 ? await mainSearch.JsonToStringMobileCallRecords(mobiles) : [];
        const callsLocation = calls && calls.length > 1 ? await mainSearch.JsonToStringCellTowerLocation(calls[0], 1) : [];



        return {
            "citizenData": citizen,
            "bankAccountData": bankAccount,
            "mobilesData": mobiles,
            "vehicleData": vehicle,
            "bankDetailsData": bankDetails,
            "transactionsData": transactions,
            "phoneCallsData": calls,
            "callsLocationData": callsLocation
        }


};