const wildStr = require('../inputvalidation/wildStr.js');
const exactStr = require('../inputvalidation/exactStr');
const searchGivenACellTowerIdAndTime = require('./idAndTimeStampFinders/searchGivenACellTowerIdAndTime.js');
const searchGivenASingleANPRIdAndTime = require('./idAndTimeStampFinders/searchGivenASingleANPRIdAndTime.js');
const searchGivenASingleATMIdAndTime = require('./idAndTimeStampFinders/searchGivenASingleATMIdAndTime.js');
const searchGivenAEposIdAndTime = require('./idAndTimeStampFinders/searchGivenAEposIdAndTime.js');
const findPersonByMobileForLocation = require('../PhoneData/findPersonByMobileForLocation');
const searchByVehicleReg = require('../vehicle/searchByVehicleReg');
const findBankCardByAtmId = require('../Financial/findBankCardByAtmId.js');
const findBankAccountIdGivenACardNumber = require('../Financial/findBankAccountIdGivenACardNumber.js');
const findDetailsFromABankAccountId = require('../Financial/findDetailsFromABankAccountId.js');
const findBankCardByEposId = require('../Financial/findBankCardByEposId.js');

module.exports =
    /**
     *  @author Anthony Wilkinson & Chris
     *  @function this function obtains an input originally from a JSON, deconstructs the incomming data into citizenID,
     *  forenames, surname, homeAddress, dateOfBirth, Sex and a Limit which is hardcoded for the time being to be 5 total. The
     *  function then turns these input parameters into a MYSQL search string for sqlauth to querry the database. wildstr and
     *  exactstr allow for a LIKE or an exact match. The MYSQL string is constructed in the functions: findPersonByPerson,
     *  findBankAccountByPerson, findMobileByPerson, findVehicleByPerson. Those functions then send the constructed strings to
     *  mysql auth where it then querries the database (see mysql auth JSDocs for more info) and then returns it here. The
     *  promise.all waits for all querries from the database to be accompolished before returning the data, this returned data
     *  is within an array that takes the format [{person},{bank},{mobile},{vehicle}].
     *  @development there could be an intial execution of finding person, that the results of are then sent to bank, mobile and
     *  vehicle in the form =>
     *      promise.all([person]).then(res => promise.all([findBankAccountByPerson(res)...
     *
     *  the type of error needs a more accurate error statement
     *
     *  @return this function returns an array of JSON objects to be passed up
     *  @require this function to work it requires a JSON object to be passed into JsonToStringDetails()
     *  */
    async function searchLocationsByIdAndTime(input) {
        const intialTimeStamp = exactStr(input.intialTimeStamp);
        const finalTimeStamp = exactStr(input.finalTimeStamp);
        const limit = (input.limit);
        const eventIdTimeAndDetails = [];


        try {
            if (input.cellTowerId !== undefined) {
                const output2 = [];
                const cellTowerId = exactStr(input.cellTowerId);
                const output1 = await searchGivenACellTowerIdAndTime(cellTowerId, intialTimeStamp, finalTimeStamp);
                for (let mob of output1) {
                    const temp = await findPersonByMobileForLocation(mob, limit);
                    const temp2 = temp;
                    if (temp[0] === undefined) {
                    } else {
                        output2.push(temp[0]);
                        temp2[0]['idType'] = "CellTowerId";
                        temp2[0]['id'] = input.cellTowerId;
                        temp2[0]['timeStamp'] = mob.timestamp;
                        eventIdTimeAndDetails.push(temp2[0]);
                    }
                }
                return {
                    eventIdTimeAndDetails
                };
            } else if (input.anprId !== undefined) {
                const output2 = [];
                const anprId = exactStr(input.anprId);
                const output1 = await searchGivenASingleANPRIdAndTime(anprId, intialTimeStamp, finalTimeStamp, limit);
                for (let cam of output1) {
                    const temp = await searchByVehicleReg(cam, limit);
                    const temp2 = temp;
                    if (temp[0] === undefined) {
                    } else {
                        output2.push(temp[0]);
                        temp2[0]['idType'] = "AnprID";
                        temp2[0]['id'] = input.anprId;
                        temp2[0]['timeStamp'] = cam.timestamp;
                        eventIdTimeAndDetails.push(temp2[0]);
                    }
                }
                return {
                    eventIdTimeAndDetails
                };

            } else if (input.atmId !== undefined) {
                debugger
                const output2 = [];
                const atmId = exactStr(input.atmId);
                const output1 = await searchGivenASingleATMIdAndTime(atmId, intialTimeStamp, finalTimeStamp, limit);
                for (let atm of output1) {
                    const temp = atm;
                    let cardNumber = await findBankCardByAtmId(atm.atmId, limit);
                    if (cardNumber[0] === undefined) {
                    } else {
                        for (let bankcard of cardNumber) {
                            let bankaccountid = await findBankAccountIdGivenACardNumber(bankcard.bankCardNumber, limit);
                            if (bankaccountid[0] === undefined) {
                            } else {
                                for (let id of bankaccountid) {
                                    debugger
                                    const temp2 = await findDetailsFromABankAccountId(id.bankcardId, limit);
                                    if (temp2[0] === undefined) {
                                    }
                                else {
                                        output2.push(temp2[0]);
                                        const temp3 = temp2;
                                        temp3[0]['idType'] = "atmID";
                                        temp3[0]['id'] = input.atmId;
                                        temp3[0]['timeStamp'] = temp.timestamp;
                                        eventIdTimeAndDetails.push(temp3[0]);
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    eventIdTimeAndDetails
                };
            } else if (input.eposId !== undefined) {
                debugger
                const output2 = [];
                const eposId = exactStr(input.eposId);
                const output1 = await (searchGivenAEposIdAndTime(eposId, intialTimeStamp, finalTimeStamp, limit));
                if (output1 === undefined) {
                } else {
                    for (let epos of output1) {
                        const temp = epos;
                        let cardNumber = await findBankCardByEposId(epos.eposId, limit);
                        if (cardNumber[0] === undefined) {
                        } else {
                            for (let bankcard of cardNumber) {
                                let bankaccountid = await findBankAccountIdGivenACardNumber(bankcard.bankCardNumber, limit);
                                if (bankaccountid[0] === undefined) {
                                } else {
                                    for (let id of bankaccountid) {
                                        const temp2 = await findDetailsFromABankAccountId(id.bankcardId, limit)
                                        if (temp2[0] === undefined) {
                                        } else {
                                            output2.push(temp2);
                                            const temp3 = temp2;
                                            temp3[0]['idType'] = "eposID";
                                            temp3[0]['id'] = input.eposId;
                                            temp3[0]['timeStamp'] = temp.timestamp;
                                            eventIdTimeAndDetails.push(temp3[0]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    eventIdTimeAndDetails
                };
            } else {
                return "error encountered, the correct Id was not supplied to searchLocationsByIdAndTime function"
            }
        } catch (err) {
            console.log(err.name);
            console.log(err.message);
            throw "error encountered at function searchLocationsByIdAndTime";
        }
    };