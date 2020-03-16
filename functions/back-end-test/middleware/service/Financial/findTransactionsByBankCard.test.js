const findTransactionsByBankCard = require("../../../../back-end/middleware/service/Financial/findTransactionsByBankCard");

let inputBankCard = {
    "accountNumber": "",
    "bank": "",
    "bankAccountId": "",
    "bankcardId": "",
    "cardNumber": "1262814734991535",
    "sortCode": ""
};

let expectedResult = [
    [
        {
            "amount": 85.61,
            "bankCardNumber": 1262814734991535,
            "eposId": 50715,
            "payeeAccount": 82115359,
            "timestamp": "2015-05-02T17:12:32.000Z"
        }
    ],
    [
        {
            "amount": 50,
            "atmId": 3839,
            "bankCardNumber": 1262814734991535,
            "timestamp": "2015-05-03T16:38:20.000Z",
            "type": "Cash Withdrawal"
        }
    ]
];

test('takes in their bank card and returns their transactions using that card', (done) => {
    jest.setTimeout(10000000);

    findTransactionsByBankCard(inputBankCard)
        .then((findEPOSTransactions) => {
            expect(findEPOSTransactions[0].toString()).toStrictEqual(expectedResult[0].toString());
            expect(findEPOSTransactions[1].toString()).toStrictEqual(expectedResult[1].toString());
            done();
        });
});