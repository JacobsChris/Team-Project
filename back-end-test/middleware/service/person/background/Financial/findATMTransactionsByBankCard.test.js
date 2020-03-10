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


test('finds ATM transactions by bank card', (done) => {
    mainSearch.JsonToStringTransactions(inputBankCard)
        .then((findATMTransactions) => {
            initRes = findATMTransactions;
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});