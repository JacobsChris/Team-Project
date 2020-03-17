const findTransactionsByBankCard = require('./Financial/findTransactionsByBankCard');
const findDetailsByBankAccount = require('./Financial/findDetailsByBankAccount');
const findAllCalls = require('./PhoneData/findCallHistoryByPhoneNumber');
const findAcquaintanceCalls = require('./PhoneData/findAcquaintanceHistoryByPhoneNumber');
const findPersonByMobile = require('./PhoneData/findPersonByMobile');
const findDetailsByName = require('./FindByPerson/findDetailsByName');
const findATMPointByATM_ID = require("./Financial/findATMPointByATM_ID");
const findEposTerminal = require("./Financial/findEPOSTerminalByEposID");
const findVehicleObs = require('./vehicle/findVehicleObsByVehicle');
const findANPRCamLoc = require("./vehicle/findANPRCameraLocation");

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [],
        transactions = {epos: [], atm: []},
        callHistory = [], acquaintances = [], vehicleSightings = [], acquaintancesCallHistory = [];

    [citizen, bankAccount, mobiles, vehicle] = await findDetailsByName(input);

    // for (let i = 0; i < vehicle.length; i++) {
    //     let car = vehicle[i];
    //     let data;
    //     if (car.vehicleRegistrationNo !== "") {
    //         data = await findVehicleObs(car);
    //     }
    //     vehicleSightings.push(data[0]);
    // }
    // vehicleSightings = vehicleSightings[0];
    //
    // for (let i = 0; i < vehicleSightings.length; i++) {
    //     const sighting = vehicleSightings[i];
    //     let data = await findANPRCamLoc(sighting);
    //     vehicleSightings[i] = {...sighting, ...data[0][0]};
    // }
    //
    // for (let account of bankAccount) {
    //     let data = await findDetailsByBankAccount(account);
    //     bankDetails.push(data[0][0]);
    // }
    //
    // for (let details of bankDetails) {
    //     const data = await findTransactionsByBankCard(details);
    //     transactions.epos = data[0];
    //     transactions.atm = data[1];
    // }
    //
    // for (let i = 0; i < transactions.epos.length; i++) {
    //     const epos = transactions.epos[i];
    //     const data = await findEposTerminal(epos.eposId);
    //     transactions.epos[i] = {...epos, ...data[0]};
    // }
    //
    // for (let i = 0; i < transactions.atm.length; i++) {
    //     const atm = transactions.atm[i];
    //     const data = await findATMPointByATM_ID(atm.atmId);
    //     transactions.atm[i] = {...atm, ...data[0]};
    // }


    for (let mobile of mobiles) {
        let data = await findAllCalls(mobile);
        callHistory.push(data[0]);
    }

    for (let mobile of mobiles) {
        let data = await findAcquaintanceCalls(mobile);
        acquaintancesCallHistory.push(data[0]);
        acquaintancesCallHistory.push(data[1]);
    }
    console.log("HERE!!!!!!!!!!!!", acquaintancesCallHistory);

    for (let call of acquaintancesCallHistory[0]) {
        console.log("call2", call);
        let data = await findPersonByMobile(call, mobiles);
        if (!(acquaintances.includes(data[0][0]))) {
            acquaintances.push(data[0][0])
        }
    }

    for (let call of acquaintancesCallHistory[1]) {
        console.log("call", call);
        console.log("mobiles", mobiles);
        let data = await findPersonByMobile(call, mobiles);
        console.log("data", data);
        if (!(acquaintances.includes(data[0][0]))) {
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