const findBankCardByBankAccount = require("../../../../../../back-end/middleware/service/person/background/Financial/findBankCardByBankAccount");

let expectedResult = [
    {
        "accountNumber": 75482888,
        "bank": "Citibank International",
        "bankAccountId": 89368,
        "bankcardId": 5683,
        "cardNumber": 9848712956998436,
        "sortCode": "05-26-95"
    }
];

let inputBankAccount = 89368;


test('takes in bank details and finds their bank card', (done) => {
    jest.setTimeout(10000000);
    findBankCardByBankAccount(inputBankAccount)
        .then((bankAccount) => {
            expect(bankAccount).toStrictEqual(expectedResult);
            done();
        });
});