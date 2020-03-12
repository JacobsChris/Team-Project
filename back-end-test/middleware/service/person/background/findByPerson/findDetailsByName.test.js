const findDetailsByName = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findDetailsByName");


let inputVal = {
    "citizenID": "",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
};

let outputPerson = [
    {
        "citizenID": 5629233377,
        "dateOfBirth": "1952-03-06",
        "forenames": "Gillian Kathryn",
        "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
        "placeOfBirth": "DERBY",
        "sex": "Female",
        "surname": "Newton"
    }
];

let outputBank = [
    {
        "accountNumber": 75482888,
        "bank": "Citibank International",
        "bankAccountId": 89368,
        "dateOfBirth": "1953-11-07",
        "forenames": "Gillian Kathryn",
        "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
        "surname": "Newton"
    }
];

let outputPhone = [
    {
        "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
        "dateOfBirth": "1953-11-07",
        "forenames": "Gillian Kathryn",
        "network": "T-Mobile",
        "phoneNumber": "07700 155159",
        "surname": "Newton"
    }
];
let outputVehicle = [
    {
        "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
        "colour": "red",
        "dateOfBirth": "1952-03-06",
        "driverLicenceID": "NEWTO553062GK9YW 82",
        "forenames": "Gillian Kathryn",
        "make": "Mini",
        "model": "One",
        "registrationDate": "1995-12-02",
        "registrationID": 5281,
        "surname": "Newton",
        "vehicleRegistrationNo": "TM15 WJL"
    }
];

test('find a person\'s full details from partial details', (done) => {
    jest.setTimeout(100000);
    findDetailsByName(inputVal)
        .then(([person, bankAccount, mobilePhone, vehicleReg,]) => {
            expect(person).toStrictEqual(outputPerson);
            expect(bankAccount).toStrictEqual(outputBank);
            expect(mobilePhone).toStrictEqual(outputPhone);
            expect(vehicleReg).toStrictEqual(outputVehicle);
            done();
        })
});