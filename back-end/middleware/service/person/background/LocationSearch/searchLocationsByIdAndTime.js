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


        try {
            if (input.cellTowerId !== undefined) {
                const output2 = [];
                const cellTowerId = exactStr(input.cellTowerId);
                const output1 = await searchGivenACellTowerIdAndTime(cellTowerId, intialTimeStamp, finalTimeStamp);

                for (let mob of output1) {
                    output2.push(await findPersonByMobileForLocation(mob.callerNumber));
                }
                return {
                    output1,
                    output2
                };
            } else if (input.anprId !== undefined) {
                const output2 = [];
                const anprId = exactStr(input.anprId);
                const output1 = await searchGivenASingleANPRIdAndTime(anprId, intialTimeStamp, finalTimeStamp);
                for (let cam of output1) {
                    output2.push(await searchByVehicleReg(cam));
                }
                console.log("output1",output1,"output2",output2);
                return {
                    output1,
                    output2
                };

            } else if (input.atmId !== undefined) {
                const output2 = [];
                const atmId = exactStr(input.atmId);
                const output1 = await searchGivenASingleATMIdAndTime(atmId, intialTimeStamp, finalTimeStamp);
                for (let atm of output1) {
                    let cardNumber = await findBankCardByAtmId(atm.atmId);
                    let bankCardNumber = exactStr(cardNumber.bankCardNumber);
                    for (let bankcard of cardNumber) {
                        let bankaccountid = await findBankAccountIdGivenACardNumber(bankcard.bankCardNumber);
                        for (let id of bankaccountid) {
                            output2.push(await findDetailsFromABankAccountId(id.bankcardId));
                        }
                    }
                }
                return {
                    output1,
                    output2
                };
            } else if (input.eposId !== undefined) {
                const output2 = [];
                const eposId = exactStr(input.eposId);
                const output1 = await (searchGivenAEposIdAndTime(eposId, intialTimeStamp, finalTimeStamp));
                for (let epos of output1) {
                    let cardNumber = await findBankCardByEposId(epos.eposId);
                    let bankCardNumber = exactStr(cardNumber.bankCardNumber);
                    for (let bankcard of cardNumber) {
                        let bankaccountid = await findBankAccountIdGivenACardNumber(bankcard.bankCardNumber);
                        for (let id of bankaccountid) {
                            output2.push(await findDetailsFromABankAccountId(id.bankcardId));
                        }
                    }
                }
                return {
                    output1,
                    output2
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