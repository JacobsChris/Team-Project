const findTransactionsByBankCard = require('./Financial/findTransactionsByBankCard');
const findDetailsByBankAccount = require('./Financial/findDetailsByBankAccount');
const findCalls = require('./PhoneData/findCallHistoryByPhoneNumber');
const findPersonByMobile = require('./PhoneData/findPersonByMobile');
const findDetailsByName = require('./FindByPerson/findDetailsByName');
const findATMPointByATM_ID = require("./Financial/findATMPointByATM_ID");
const findEposTerminal = require("./Financial/findEPOSTerminalByEposID");
const findVehicleObs = require('./vehicle/findVehicleObsByVehicle');
const findANPRCamLoc = require("./vehicle/findANPRCameraLocation");

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [],
        transactions = {epos: [], atm: []},
        callHistory = [], acquaintances = [], vehicleSightings = [];

    [citizen, bankAccount, mobiles, vehicle] = await findDetailsByName(input);

    for (let i = 0; i < vehicle.length; i++) {
        let car = vehicle[i];
        let data;
        if (car.vehicleRegistrationNo !== "") {
            data = await findVehicleObs(car);
        }
        vehicleSightings.push(data[0]);
    }
    vehicleSightings = vehicleSightings[0];

    for (let i = 0; i < vehicleSightings.length; i++) {
        const sighting = vehicleSightings[i];
        let data = await findANPRCamLoc(sighting);
        vehicleSightings[i] = {...sighting, ...data[0][0]};
    }

    for (let account of bankAccount) {
        let data = await findDetailsByBankAccount(account);
        bankDetails.push(data[0][0]);
    }

    for (let details of bankDetails) {
        const data = await findTransactionsByBankCard(details);
        transactions.epos = data[0];
        transactions.atm = data[1];
    }

    for (let i = 0; i < transactions.epos.length; i++) {
        const epos = transactions.epos[i];
        const data = await findEposTerminal(epos.eposId);
        transactions.epos[i] = {...epos, ...data[0]};
    }

    for (let i = 0; i < transactions.atm.length; i++) {
        const atm = transactions.atm[i];
        const data = await findATMPointByATM_ID(atm.atmId);
        transactions.atm[i] = {...atm, ...data[0]};
    }


    for (let mobile of mobiles) {
        let data = await findCalls(mobile);
        callHistory.push(data[0]);
    }

    if (callHistory[0]) {
        for (let call of callHistory[0]) {
            let data = await findPersonByMobile(call, mobiles);
            acquaintances.push(data[0][0])
        }
    }


    return {
        "citizenData": citizen,
        "bankAccountData": bankAccount,
        "mobilesData": mobiles,
        "vehicleData": vehicle,
        "vehicleSightings": vehicleSightings,
        "bankDetailsData": bankDetails,
        "transactionsData": transactions,
        "callHistoryData": callHistory[0],
        "acquaintancesData": acquaintances
    }


}
;