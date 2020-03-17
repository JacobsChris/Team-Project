const findATMTransactionsByBankCard = require("../../../../back-end/middleware/service/Financial/findATMTransactionsByBankCard");

let expectedResult = [{
    "amount": "50",
    "atmId": "3839",
    "bankCardNumber": "1262814734991535",
    "timestamp": "2015-05-03T16:38:20.000Z",
    "type": "Cash Withdrawal",
}];


let inputBankCard = {
    "accountNumber": "",
    "bank": "",
    "bankAccountId": "",
    "bankcardId": "",
    "cardNumber": "1262814734991535",
    "sortCode": ""
};


test('finds ATM transactions by bank card', (done) => {
    jest.setTimeout(10000000);

    findATMTransactionsByBankCard(inputBankCard)
        .then((findATMTransactions) => {
            findATMTransactions;
            expect(findATMTransactions.toString()).toStrictEqual(expectedResult.toString());
            done();
        });
});