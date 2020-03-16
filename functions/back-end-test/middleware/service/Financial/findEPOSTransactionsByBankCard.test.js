const findEPOSTransactionsByBankCard = require("../../../../back-end/middleware/service/Financial/findEPOSTransactionsByBankCard");

let initRes = [];
let expectedResult = [
    {
        "amount": "85.61",
        "bankCardNumber": "1262814734991535",
        "eposId": "50715",
        "payeeAccount": "82115359",
        "timestamp": "2015-05-02T17:12:32.000Z",
    }
];

let inputBankCard = {
    "accountNumber": "",
    "bank": "",
    "bankAccountId": "",
    "bankcardId": "",
    "cardNumber": "1262814734991535",
    "sortCode": ""
};


test('takes in their bank card and returns their transactions using that card', (done) => {
    jest.setTimeout(10000000);

    findEPOSTransactionsByBankCard(inputBankCard)
        .then((findEPOSTransactions) => {
            expect(findEPOSTransactions.toString()).toStrictEqual(expectedResult.toString());
            done();
        });
});