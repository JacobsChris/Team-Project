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
const findCellTower = require("./PhoneData/findCellTowerLocationBasedOnCellTowerId");

module.exports = async function (input) {

    let citizen = [], mobiles = [], bankAccount = [], vehicle = [], bankDetails = [],
        transactions = {epos: [], atm: []},
        inComingCallHistory = [], outGoingCallHistory = [], vehicleSightings = [], acquaintancesCallHistory = [],
        targetHasCalled = [],
        targetHasBeenCalledBy = [];

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
        outGoingCallHistory.push(data[0]);
        inComingCallHistory.push(data[1])
    }
    outGoingCallHistory = outGoingCallHistory[0];
    inComingCallHistory = inComingCallHistory[0];

    for (let i = 0; i < outGoingCallHistory.length; i++) {
        const phoneCall = outGoingCallHistory[i];
        console.log("!!!!!!!!!!!!!!", phoneCall);
        let data = await findCellTower(phoneCall.callCellTowerId);
        console.log("££££££££££££££££", data);
        // outGoingCallHistory[i] = {...phoneCall,...data[0]}
        //TODO: get data in the right format, so that I can add the location of the target to the phone call history
    }

    // for (let mobile of mobiles) {
    //     let data = await findAcquaintanceCalls(mobile);
    //     acquaintancesCallHistory.push(data[0]);
    //     acquaintancesCallHistory.push(data[1]);
    // }
    //
    // for (let call of acquaintancesCallHistory[0]) {
    //     let data = await findPersonByMobile(call, mobiles);
    //     if (!(targetHasCalled.includes(data[0][0]))) {
    //         targetHasCalled.push(data[0][0])
    //     }
    // }
    //
    // for (let call of acquaintancesCallHistory[1]) {
    //     let data = await findPersonByMobile(call, mobiles);
    //     if (!(targetHasBeenCalledBy.includes(data[0][0]))) {
    //         targetHasBeenCalledBy.push(data[0][0])
    //     }
    // }


    return {
        "citizenData": citizen,
        "bankAccountData": bankAccount,
        "mobilesData": mobiles,
        "vehicleData": vehicle,
        "vehicleSightings": vehicleSightings,
        "bankDetailsData": bankDetails,
        "transactionsData": transactions,
        "inComingCallHistory": inComingCallHistory,
        "outGoingCallHistory": outGoingCallHistory,
        "targetHasCalled": targetHasCalled,
        "targetHasBeenCalledBy": targetHasBeenCalledBy
    }


}
;