const findTransactionsByBankCard = require('./Financial/findTransactionsByBankCard');
const findDetailsByBankAccount = require('./Financial/findDetailsByBankAccount');
const findCalls = require('./PhoneData/findCallHistoryByPhoneNumber');
const findPersonByMobile = require('./PhoneData/findPersonByMobile');
const findDetailsByName = require('./FindByPerson/findDetailsByName');

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [],
        transactions = {epos: [], atm: []},
        callHistory = [], acquaintances = [];

    [citizen, bankAccount, mobiles, vehicle] = await findDetailsByName(input);

    for (let account of bankAccount) {
        let data = await findDetailsByBankAccount(account);
        bankDetails.push(data[0][0]);
    }

    for (let details of bankDetails) {
        const data = await findTransactionsByBankCard(details);
        transactions.epos = data[0];
        transactions.atm = data[1];
    }

    for (let mobile of mobiles) {
        let data = await findCalls(mobile);
        callHistory.push(data[0]);
    }

    for (let call of callHistory[0]) {
        let data = await findPersonByMobile(call, mobiles);
        acquaintances.push(data[0][0])
    }
    console.log(citizen);
    return {
        "citizenData": citizen,
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