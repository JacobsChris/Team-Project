const findDetailsFromABankAccountId = require("../../../../back-end/middleware/service/Financial/findDetailsFromABankAccountId");

let inputVal;
let inputUndefined = ;

test('takes in a bank account id and returns the details about it', (done) => {
    jest.setTimeout(100000);
    findDetailsFromABankAccountId(inputUndefined, 1)
        .then(([details]) => {
            expect(details).toEqual(expectedResult);
            done();
        });
});
//TODO finish this test