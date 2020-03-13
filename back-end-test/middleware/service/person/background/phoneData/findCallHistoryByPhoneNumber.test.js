const findCallHistoryByPhoneNumber = require("../../../../../../back-end/middleware/service/person/background/PhoneData/findCallHistoryByPhoneNumber");

let initRes = [[], []];
let expectedResult = [
    [
        {
            "callCellTowerId": null,
            "callerNumber": "07700 382747",
            "count(callerNumber)": 1,
            "receiverNumber": "07700 264247",
            "receiverTowerId": 108596,
            "timestamp": "2015-05-01T09:08:52.000Z"
        }
    ],
    []
];

let inputPhone = {
    "phoneNumber": "07700 382747"
};


test('takes in a phone number and searches for a call history', (done) => {
    jest.setTimeout(1000000);
    findCallHistoryByPhoneNumber(inputPhone)
        .then(([OutGoing, InComing]) => {
            initRes[0] = OutGoing;
            initRes[1] = InComing;
            expect(initRes.toString()).toContain(expectedResult.toString());
            done();
        });
});