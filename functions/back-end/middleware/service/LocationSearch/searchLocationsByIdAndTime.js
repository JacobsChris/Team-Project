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
     *  @author Anthony Wilkinson
     *  @function  this function takes in a json object similar to => {
                                                                        "eposId": 696,
                                                                        "intialTimeStamp": "2015-05-01 14:03:29",
                                                                        "finalTimeStamp": "2015-05-01 16:33:29",
                                                                        "limit": 1
                                                                    }
     * the initial and final timestamps are necessary for this function to work. The id field can either be celltowerId, anprId, atmId or eposId. the limit is an optional
     * field and is not necessary for the code to function as there are redundancies in place in the rest of the code to work without it and assume a limit of around 10,000.
     *
     * the eventual result of this function should always return forename, surname, DoB and address. It will also include the type of id used to obtain the data and the number
     * and the timestamp of the event occurrence.
     *
     * There are checks to see if information returned will be an array like [], through bankaccountid[0] === undefined and this will not return the empty array but end that loop
     * without saving the undefined array
     *
     *  @return this function returns an array of JSON objects to be passed up an example of a singular item would
     *  be => {
                    "eventIdTimeAndDetails": [{
                        "bankAccountId": 468721,
                        "accountNumber": 8636271,
                        "bank": "Barclays Bank",
                        "forenames": "Joseph Shane",
                        "surname": "Logan",
                        "dateOfBirth": "1991-02-14",
                        "homeAddress": "69 KINGS ROAD, BIRMINGHAM, B11 2AA",
                        "idType": "eposID",
                        "id": 696,
                        "timeStamp": "2015-05-01T14:37:26.000Z"
                    }]
                }
     *  @require this function to work it requires a JSON object to be passed into it
     *  */
    async function searchLocationsByIdAndTime(input, intialTimeStampInput, finalTimeStampInput, limit) {
        const intialTimeStamp = exactStr(intialTimeStampInput);
        const finalTimeStamp = exactStr(finalTimeStampInput);


        const eventIdTimeAndDetails = [];
        const arrays = Object.values(input);

        try {
            for (let inp of arrays[0]) {
                if (inp.anprId !== undefined) {
                    const output2 = [];
                    const anprId = exactStr(inp.anprId);
                    const output1 = await searchGivenASingleANPRIdAndTime(anprId, intialTimeStamp, finalTimeStamp, limit);
                    for (let cam of output1) {
                        const temp = await searchByVehicleReg(cam, limit);
                        const temp2 = temp;
                        if (temp[0] === undefined) {
                        } else {
                            output2.push(temp[0]);
                            temp2[0]['latitude'] = inp.latitude;
                            temp2[0]['longitude'] = inp.longitude;
                            temp2[0]['idType'] = "AnprID";
                            temp2[0]['id'] = inp.anprId;
                            temp2[0]['timeStamp'] = cam.timestamp;
                            eventIdTimeAndDetails.push(temp2[0]);
                        }
                    }

                } else {
                    return "error encountered, the correct Id was not supplied to searchLocationsByIdAndTime function. anpr"
                }
            }
            for (let inp of arrays[1]) {
                if (inp.atmId !== undefined) {
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
                                        const temp2 = await findDetailsFromABankAccountId(id.bankcardId, limit);
                                        if (temp2[0] === undefined) {
                                        } else {
                                            output2.push(temp2[0]);
                                            const temp3 = temp2;
                                            temp3[0]['latitude'] = inp.latitude;
                                            temp3[0]['longitude'] = inp.longitude;
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
                } else {
                    return "error encountered, the correct Id was not supplied to searchLocationsByIdAndTime function. atm"
                }
            }
            for (let inp of arrays[2]) {

                if (inp.cellTowerId !== undefined) {
                    const output2 = [];
                    const cellTowerId = exactStr(inp.cellTowerId);
                    const output1 = await searchGivenACellTowerIdAndTime(cellTowerId, intialTimeStamp, finalTimeStamp, limit);
                    for (let mob of output1) {
                        const temp = await findPersonByMobileForLocation(mob, limit);
                        const temp2 = temp;
                        if (temp[0] === undefined) {
                        } else {
                            output2.push(temp[0]);
                            temp2[0]['latitude'] = inp.latitude;
                            temp2[0]['longitude'] = inp.longitude;
                            temp2[0]['idType'] = "CellTowerId";
                            temp2[0]['id'] = inp.cellTowerId;
                            temp2[0]['timeStamp'] = mob.timestamp;
                            eventIdTimeAndDetails.push(temp2[0]);
                        }
                    }
                } else {
                    return "error encountered, the correct Id was not supplied to searchLocationsByIdAndTime function. celltower"
                }
            }
            for (let inp of arrays[3]) {
                if (inp.id !== undefined) {
                    const output2 = [];
                    const eposId = exactStr(inp.id);
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
                                            const temp2 = await findDetailsFromABankAccountId(id.bankcardId, limit);
                                            if (temp2[0] === undefined) {
                                            } else {
                                                output2.push(temp2);
                                                const temp3 = temp2;
                                                temp3[0]['latitude'] = inp.latitude;
                                                temp3[0]['longitude'] = inp.longitude;
                                                temp3[0]['idType'] = "eposID";
                                                temp3[0]['id'] = inp.id;
                                                temp3[0]['timeStamp'] = temp.timestamp;
                                                eventIdTimeAndDetails.push(temp3[0]);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }
                } else {
                    return "error encountered, the correct Id was not supplied to searchLocationsByIdAndTime function. epos"
                }
            }

            return {
                eventIdTimeAndDetails
            };


        } catch
            (err) {
            console.info(err);
            console.info(err.name);
            console.info(err.message);
            throw new Error('error encountered at function searchLocationsByIdAndTime');
        }
    }
;
