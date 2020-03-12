const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_Citizen_Details_Main_Func/findDetailsByName.js');
const findBankCardByAccountId = require('./background/Financial/findDetailsByBankAccount');
const findTransactionsByBankCard = require('./background/Financial/findTransactionsByBankCard.js');
const findATMPointByATMId = require('./background/Financial/findDetailsByATMId.js');
const findVehicleLocationByVehicleReg = require('./background/vehicle/findVehicleObsByVehicle.js');
const findANPRCameraLocation = require('./background/vehicle/findANPRCameraLocation.js');
const findPersonByMobile = require("./background/PhoneData/findPersonByMobile");
const findCallHistoryByPhoneNumber = require("./background/PhoneData/findCallHistoryByPhoneNumber");
const findCellTowerLocationBasedOnCellTowerId = require('./background/PhoneData/findCellTowerLocationBasedOnCellTowerId');
// const searchByLocation = require('./background/LocationSearch/SearchByLocation');

module.exports = {

    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail Search in order of citizen { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE',sex: 'Male' }
     * @requires this at the end of the function to get @return .then(([citizen]) => { console.log("Advanced Detail Search in order of citizen" , citizen); });
     * */
    JsonToStringName: function JsonToStringName(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex);
    },
    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail Search in order of citizen [ { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE', sex: 'Male' } ]
     Advanced Detail Search BankAccount []
     Advanced Detail Search Mobile []
     Advanced Detail Search vehicle []
     *@requires this at the end to get @return .then(([Citizen, BankAccount, Mobiles, vehicle]) => { console.log("Advanced Detail Search in order of citizen" , Citizen,
        "Advanced Detail Search BankAccount", BankAccount,
        "Advanced Detail Search Mobile", Mobiles
        ,"Advanced Detail Search vehicle", vehicle); });
     * */
    JsonToStringDetails: function JsonToStringDetails(input) {
        return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex);

    },
    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like { bankcardId: 353, cardNumber: 4298912572327611.5, sortCode: '36-40-95', bankAccountId: 84038, accountNumber: 89228899, bank: 'Clydesdale Bank' }
     * @requires this at the end to get @return }).then(([bankaccount]) => {console.log("Advanced Detail Search in order of citizen" , bankaccount); });
     * */


    JsonToStringBankDetails: function JsonToStringBankDetails(input) {
        return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId, input.accountNumber, input.bank, input.forenames, input.surname, input.dateOfBirth, input.homeAddress)

    },

    /**
     * @author Anthony Wilkinson & Chris
     *  @return an array like Advanced Detail findEPOSTransactions{ timestamp: 2015-05-01T14:37:24.000Z, eposId: 49178, bankCardNumber: 8257821168691391, payeeAccount: 26996565, amount: 59.5 }..and more
     *          Advanced Detail findATMTransactions {{ timestamp: 2015-05-01T14:37:23.000Z, atmId: 5436, bankCardNumber: 4722912624353299, type: 'Cash Withdrawal', amount: 120 }
     *  @requires this at the end to get @return }).then(([findEPOSTransactions,findATMTransactions]) => { console.log("Advanced Detail findEPOSTransactions" , findEPOSTransactions, "Advanced Detail findATMTransactions",findATMTransactions);})
     *  */
    JsonToStringTransactions: function JsonToStringTransactions(input) {
        return findTransactionsByBankCard.findTransactionsByBankCard(input.bankcardId, input.cardNumber, input.sortCode, input.bankAccountId, input.accountNumber, input.bank)
    },

    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail ATMPoint [ { atmId: 5436, operator: 'Citibank International', streetName: 'Longstone Road', postcode: 'B42 2DU', latitude: 52.5354968066479, longitude: -1.90652676059225 } ]
     * @requires this at teh end to get @return .then(([ATMPoint]) => { console.log("Advanced Detail ATMPoint" , ATMPoint); );*/
    JsonToStringATM: function JsonToStringATM(input) {
        return findATMPointByATMId.findATMPointByATMId(input.timestamp, input.atmId, input.bankCardNumber, input.type, input.amount)
    },

    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail ATMPoint [ { ANPRPointId: 5544, stamptime: 2015-05-01T06:47:57.000Z, vehicleRegistrationNumber: 'JD94 XZB' } ]
     * @requires this at the end to get @return .then(([vehicleObs]) => { console.log("Advanced Detail vehicleObs" , vehicleObs); });*/
    JsonToStringVehicleObs: function JsonToStringVehicleObs(input) {
        return findVehicleLocationByVehicleReg.findVehicleLocationByVehicleReg(input.vehicleRegistrationNo)
    },
    JsonToStringANPRLocation: function JsonToStringANPRLocation(input) {
        return findANPRCameraLocation.findANPRCameraLocation(input.ANPRPointId);
    },
    /**
     * @author Chris & Tony
     * @param input is a JSON which contains the key vehicleRegistrationNo
     * @returns an array object of vehicles that match the vehicle registration number in the input
     * @requires the following code at the end to access data:
     *          .then(([vehicle]) => {console.log("Advanced Detail Search in order of vehicle", vehicle);});
     */
    JsonToVehicleByReg: function JsonToVehicleByReg(input) {
        return searchByVehicleReg.searchByVehicleReg(input.vehicleRegistrationNo)
    },
    /**
     * @author Chris & Tony
     * @param input is a JSON which contains the key phoneNumber
     * @returns an array object of persons that match the phone number inputted
     * @requires the following code at the end to access data:
     *          .then(([Person]) => {console.log("Advanced Detail Search in order of Person", Person);});
     */
    JsonToPersonByMobile: function JsonToPersonByMoile(input, person) {
        if (input.receiverNumber == person.phoneNumber) {
            return findPersonByMobile.findPersonByMobile(input.callerNumber);
        }else {
            return findPersonByMobile.findPersonByMobile(input.receiverNumber);
        }
    },
    /**
     * @author Chris & Tony
     * @param input is a JSON which contains the key phoneNumber
     * @returns two arrays, first of phone numbers called by the input phone number and second of phone numbers that have called the input phone number  that match the phone number inputted
     * @requires the following code at the end to access data:
     *          .then(([OutGoing,InComing]) => {console.log("Advanced Detail Search in order of OutGoing, InComing", OutGoing, InComing);});
     */
    JsonToCallHistory: function JsonToCallHistory(input) {
        return findCallHistoryByPhoneNumber.findCallHistoryByPhoneNumber(input.phoneNumber)
    },

    /**
     * The functions below are pretty much identical.
     * All work the same way.
     * Difference is which cell tower they search through in Mobile Call Records:
     *  one searches through Caller Cell Tower and the other through Receiver Cell Tower.  Third one takes in generic ID.
     * @param input is a JSON object with a key-pair called callCellTowerId or receiverTowerId or cellTowerId
     * @returns promised location of a cell tower with given ID.  Use below code to access tje results
     * .then(([cellTower]) => {console.log("Advanced Detail Search ", cellTower);});
     * @constructor
     */
    JsonToStringCallCellTowerLocation: function JsonToStringCellTowerLocation(input) {
        return findCellTowerLocationBasedOnCellTowerId.findCellTowerLocationBasedOnCellTowerId(input.callCellTowerId);
    },

    JsonToStringReceiverCellTowerLocation: function JsonToStringCellTowerLocation(input) {
        return findCellTowerLocationBasedOnCellTowerId.findCellTowerLocationBasedOnCellTowerId(input.receiverTowerId);
    },

    JsonToStringCellTowerLocation: function JsonToStringCellTowerLocation(input) {
        return findCellTowerLocationBasedOnCellTowerId.findCellTowerLocationBasedOnCellTowerId(input.cellTowerId);
    },


};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Debugging Zone  /////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Scenario 1  /////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////  find a citizen on a partial input  ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function JsonToStringName(input) {
//     return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex);
// }
//
// JsonToStringName(    {
//     "citizenID": "",
//     "forenames": "William",
//     "surname": "Willis",
//     "homeAddress": "",
//     "dateOfBirth": "1958-10-27",
//     "placeOfBirth": "",
//     "sex": ""
// }).then(([citizen]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , citizen);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// find details on a citizen on a full input  ////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringDetails(input) {
//     return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex);
// }
//
// JsonToStringDetails(
//     {
//         "citizenID": "",
//         "forenames": "William",
//         "surname": "Willis",
//         "homeAddress": "",
//         "dateOfBirth": "1958-10-27",
//         "placeOfBirth": "",
//         "sex": ""
//     }
// ).then(([Citizen, BankAccount, Mobiles, vehicle]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , Citizen,
//         "Advanced Detail Search BankAccount", BankAccount,
//         "Advanced Detail Search Mobile", Mobiles
//         , "Advanced Detail Search vehicle", vehicle);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// find bank card of a citizen on a full input  //////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringBankDetails(input) {
//     return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress,"5")
// }
// JsonToStringBankDetails({
//     "bankAccountId": "84038",
//     "accountNumber": "",
//     "bank": "",
//     "forenames": "",
//     "surname": "",
//     "dateOfBirth": "",
//     "homeAddress": ""
// }).then(([bankaccount]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , bankaccount);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// find transactions placed from a bankcard full input  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringTransactions(input){
//     return findTransactionsByBankCard.findTransactionsByBankCard(input.bankcardId,input.cardNumber,input.sortCode,input.bankAccountId,input.accountNumber,input.bank)
// }
//
// JsonToStringTransactions({
//     "bankcardId": "353",
//     "cardNumber": "",
//     "sortCode": "",
//     "bankAccountId": "",
//     "accountNumber": "",
//     "bank": ""
// }).then(([findEPOSTransactions,findATMTransactions]) => {
//     console.log("Advanced Detail findEPOSTransactions" , findEPOSTransactions, "Advanced Detail findATMTransactions",findATMTransactions);
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// find an ATM from a bank card number full input  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringATM(input){
//     return findATMPointByATMId.findATMPointByATMId(input.timestamp,input.atmId,input.bankCardNumber,input.type,input.amount)
// }
// JsonToStringATM({ "timestamp": "2015-05-01T14:37:23.000Z",
//     "atmId": "5436",
//     "bankCardNumber": "4722912624353299",
//     "type": "Cash Withdrawal",
//     "amount": "120"
// }).then(([ATMPoint]) => {
//     console.log("Advanced Detail ATMPoint" , ATMPoint);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// find a vehicle from a vehicle reg full input  /////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function  JsonToStringVehicleObs(input) {
//     return findVehicleByVehicleReg.input(input.registrationID,)
// }
//
// JsonToStringVehicleObs{
//     "registrationID": "5281",
//     "registrationDate": "1995-12-02",
//     "vehicleRegistrationNo": "TM15 WJL",
//     "make": "Mini",
//     "model": "One",
//     "colour": "red",
//     "forenames": 'Gillian Kathryn',
//     "surname": "Newton",
//     "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
//     "dateOfBirth": "1952-03-06",
//     "driverLicenceID": "NEWTO553062GK9YW 82"


// function JsonToStringVehicleObs(input) {
//     return findVehicleLocationByVehicleReg.findVehicleLocationByVehicleReg(input.vehicleRegistrationNo)
// }
//
// JsonToStringVehicleObs({
//     "registrationID": "",
//     "registrationDate": "",
//     "vehicleRegistrationNo": "JD94 XZB",
//     "make": "",
//     "model": "",
//     "colour": "",
//     "forenames": ' ',
//     "surname": "",
//     "address": "",
//     "dateOfBirth": "",
//     "driverLicenceID": ""
// }).then(([vehicleObs]) => {
//     console.log("Advanced Detail vehicleObs", vehicleObs);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// find a ANPR camera location from a ANPRId full input  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringANPRLocation(input) {
//     return findANPRCameraLocation.findANPRCameraLocation(input.ANPRPointId);
// }
//
// JsonToStringANPRLocation({
//     "ANPRPointId": 5544,
//     "stamptime": "2015-05-01T06:47:57.000Z",
//     "vehicleRegistrationNumber": 'JD94 XZB'
// })
//     .then(([ANPRLocations]) => {
//         console.log("Advanced Detail vehicleObs", ANPRLocations);
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// find a persons mobile phone records based on their phone numb  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringMobileCallRecords(input) {
//     return findMobileCallRecordsFromOwnerPhoneNumb.findMobileCallRecordsFromOwnerPhoneNumb(input.phoneNumber);
//
// }
//
// JsonToStringMobileCallRecords({
//     "forenames": "",
//     "surname": "",
//     "dateOfBirth": "",
//     "address": "",
//     "phoneNumber": "07700 052181",
//     "network": ""
// })
//
//     .then(([ANPRLocations]) => {
//         console.log("Advanced Detail vehicleObs", ANPRLocations);
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// find a location based on a given Cell Tower ID  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringCellTowerLocation(input) {
//     return findCellTowerLocationBasedOnCellTowerId.findCellTowerLocationBasedOnCellTowerId(input.callCellTowerId);
// }
//
// JsonToStringCellTowerLocation({
//     "timestamp": '2015-05-01T09:08:52.000Z',
//     "callerNumber": '07700 988518',
//     "callCellTowerId": 35,
//     "receiverNumber": '07700 801501',
//     "receiverTowerId": 104552 })
//     .then(([CellTowerLocations]) => {
//     console.log("Advanced Detail vehicleObs", CellTowerLocations);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// find call history of an entered phone number  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function JsonToCallHistory(input) {
//     return findCallHistoryByPhoneNumber.findCallHistoryByPhoneNumber(input.phoneNumber, 5)
// }
// ////outgoing call = 07700 846156
// ////incoming call = 07700 605601
// JsonToCallHistory({
//     "forenames": "",
//     "surname": "",
//     "dateOfBirth": "",
//     "address": "",
//     "phoneNumber": "07700 605601",
//     "network": ""
// }).then(([associateNumbsOutgoing,associateNumbsInGoing]) => {
//     console.log("Outgoing calls", associateNumbsOutgoing,"Incoming calls", associateNumbsInGoing);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// from a phone number find a person  //////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringFindPersonFromNumber(input) {
//     return findPersonByMobile.findPersonByMobile(input.phoneNumber)
// }
//
// JsonToStringFindPersonFromNumber({
//     "forenames": "",
//     "surname": "",
//     "dateOfBirth": "",
//     "address": "",
//     "phoneNumber": "07700 382747",
//     "network": ""
// }).then(([associate]) => {
//     console.log("Advanced Detail associate", associate);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Scenario 2  /////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringSearchByLocation(input){
//     return searchByLocation.searchByLocation(input.latitude, input.longitude,input.radius);
//
// }
//
// JsonToStringSearchByLocation({
//     latitude: 51.54500551249844,
//         longitude: -0.13447255196733515,
//         radius: 1}).then(([ANPRCameraLocations,ATMPointLocations]) => {console.log("ANPRCameraLocations", ANPRCameraLocations,"ATMPointLocations",ATMPointLocations);});


// function JsonToStringSearchCamerasByArea(input) {
//     return searchCamerasByArea.searchCamerasByArea( input.latitude, input.longitude,input.radius)
// }
//
// JsonToStringSearchCamerasByArea({
//     latitude: 51.54500551249844,
//     longitude: -0.13447255196733515,
//     radius: 2}).then(([Locations]) => {console.log("Advanced Detail Search in order of vehicle", Locations);});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Scenario 3  /////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// from a Vehicle reg find a person  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringVehicleByReg(input) {
//     return searchByVehicleReg.searchByVehicleReg(input.vehicleRegistrationNo)
// }
//
// JsonToStringVehicleByReg({
//     registrationID: 322,
//     registrationDate: '1995-06-15',
//     vehicleRegistrationNo: "JL2_ ___",
//     make: 'Ford',
//     model: 'Fiesta',
//     colour: 'silver',
//     forenames: 'Glenn Eric',
//     surname: 'Walters',
//     address: '54 ELIZABETH ROAD, WEST BROMWICH, B13 8QH',
//     dateOfBirth: '1984-01-09',
//     driverLicenceID: 'WALTE801094GE9CT 23'
// })
//     .then(([vehicle]) => {
//         console.log("Advanced Detail Search in order of vehicle", vehicle);});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// from a Vehicle reg full details do an advanced search  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JsonToStringDetailsFromVehicleReg: function JsonToStringDetailsFromVehicleReg(input) {
//     return findFullDetailsBasedOnAVehcileReg.findDetailsByName( input.forenames, input.surname, input.address, input.dateOfBirth);
// }
//
//
// JsonToStringDetailsFromVehicleReg(
//     {
//         registrationID: 322,
//         registrationDate: '1995-06-15',
//         vehicleRegistrationNo: "JL2_ ___",
//         make: 'Ford',
//         model: 'Fiesta',
//         colour: 'silver',
//         forenames: 'Glenn Eric',
//         surname: 'Walters',
//         address: '54 ELIZABETH ROAD, WEST BROMWICH, B13 8QH',
//         dateOfBirth: '1984-01-09',
//         driverLicenceID: 'WALTE801094GE9CT 23'
//     }
// ).then(([Citizen, BankAccount, Mobiles, vehicle]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , Citizen,
//         "Advanced Detail Search BankAccount", BankAccount,
//         "Advanced Detail Search Mobile", Mobiles
//         , "Advanced Detail Search vehicle", vehicle);
// });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  End of debuggin zone /////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// .''.
//     .''.      .        *''*    :_\/_:     .
// :_\/_:   _\(/_  .:.*_\/_*   : /\ :  .'.:.'.
//     .''.: /\ :    /)\   ':'* /\ *  : '..'.  -=:o:=-
// :_\/_:'.:::.  | ' *''*    * '.\'/.'_\(/_'.':'.'
// : /\ : :::::  =  *_\/_*     -= o =- /)\    '  *
// '..'  ':::' === * /\ *     .'/.\'.  ' ._____
// *        |   *..*         :       |.   |' .---"|
// *      |     _           .--'|  ||   | _|    |
// *      |  .-'|       __  |   |  |    ||      |
//     .-----.   |  |' |  ||  |  | |   |  |    ||      |
// ___'       ' /"\ |  '-."".    '-'   '-.'    '`      |____
// jgs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// &                    ~-~-~-~-~-~-~-~-~-~   /|
// ejm97    )      ~-~-~-~-~-~-~-~  /|~       /_|\
//         _-H-__  -~-~-~-~-~-~     /_|\    -~======-~
// ~-\XXXXXXXXXX/~     ~-~-~-~     /__|_\ ~-~-~-~
// ~-~-~-~-~-~    ~-~~-~-~-~-~    ========  ~-~-~-~