const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [
    [
        {
            "accountNumber": 75482888,
            "bank": "Citibank International",
            "bankAccountId": 89368,
            "bankcardId": 5683,
            "cardNumber": 9848712956998436,
            "sortCode": "05-26-95"
        }
    ]
];

let inputBankAccount = {
    "bankAccountId": "89368",
    "accountNumber": "85482888",
    "bank": "Citibank International",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "dateOfBirth": "1953-11-07",
    "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW"
};


test('takes in bank details and finds their bank card', (done) => {
    mainSearch.JsonToStringBankDetails(inputBankAccount)
        .then((bankaccount) => {
            initRes = bankaccount;
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});