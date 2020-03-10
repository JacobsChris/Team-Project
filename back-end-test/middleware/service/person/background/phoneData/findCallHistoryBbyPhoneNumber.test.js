const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [[], []];
let expectedResult = [[{"COUNT(*)": 1, "receiverNumber": "07700 264247"}], []];

let inputPhone = {
    "phoneNumber": "07700 382747"
};


test('takes in a valid string and searches for persons', (done) => {
    mainSearch.JsonToCallHistory(inputPhone)
        .then(([OutGoing, InComing]) => {
            initRes[0] = OutGoing;
            initRes[1] = InComing;
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});