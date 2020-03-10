const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [[], []];

let inputBankCard = {
    "accountNumber": "75482888",
    "bank": "Citibank International",
    "bankAccountId": "89368",
    "bankcardId": "5683",
    "cardNumber": "9848712956998436",
    "sortCode": "05-26-95"
};


test('takes in their bank card and returns their transactions using that card', (done) => {
    jest.setTimeout(10000000);

    mainSearch.JsonToStringTransactions(inputBankCard)
        .then((findEPOSTransactions) => {
            initRes = findEPOSTransactions;
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});