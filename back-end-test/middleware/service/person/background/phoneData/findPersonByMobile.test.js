const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [
    {
        "address": "25 MARESFIELD GARDENS, LONDON, NW3 5TE",
        "dateOfBirth": "1986-09-17",
        "forenames": "Pamela Patricia",
        "network": "Vodafone",
        "phoneNumber": "07700 000022",
        "surname": "Young"
    }
];

let inputPhone = {
    "receiverNumber": "07700 000021",
    "callerNumber": "07700 000022"
};
let inputPerson = {
    "phoneNumber": "07700 000021"
};


test('takes in a valid string and searches for persons', (done) => {
    jest.setTimeout(10000000);
    mainSearch.JsonToPersonByMobile(inputPhone, inputPerson)
        .then(([citizen]) => {
            console.log("Advanced Detail Search in order of phone number"
                , citizen);
            initRes = citizen;
            console.log(initRes);
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});