const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [
    [
        {
            "citizenID": 5629233377,
            "dateOfBirth": "1952-03-06",
            "forenames": "Gillian Kathryn",
            "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
            "placeOfBirth": "DERBY",
            "sex": "Female",
            "surname": "Newton"
        }
    ],
    [
        {
            "accountNumber": "75482888",
            "bank": "Citibank International",
            "bankAccountId": 89368,
            "dateOfBirth": "1953-11-07",
            "forenames": "Gillian Kathryn",
            "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
            "surname": "Newton"
        }
    ],
    [
        {
            "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
            "dateOfBirth": "1953-11-07",
            "forenames": "Gillian Kathryn",
            "network": "T-Mobile",
            "phoneNumber": "07700 155159",
            "surname": "Newton"
        }
    ],
    [
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
    ]
];

let inputPerson = {
    "citizenID": "",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
};


test('takes in a valid string and searches for a persons details', (done) => {
    mainSearch.JsonToStringDetails(inputPerson)
        .then(([Citizen, BankAccount, Mobiles, vehicle]) => {
            initRes[0] = Citizen;
            initRes[1] = BankAccount;
            initRes[2] = Mobiles;
            initRes[3] = vehicle;
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});
