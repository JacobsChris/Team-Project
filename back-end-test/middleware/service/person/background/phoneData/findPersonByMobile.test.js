const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = {
    "address": "15C BESSEMER ROAD, WELWYN GARDEN CITY, AL7 1HU",
    "dateOfBirth": "1988-04-08", "forenames": "Lesley Nichola",
    "network": "Orange",
    "phoneNumber": "07700 000021",
    "surname": "Macleod",
};

let inputPhone = {
    "phoneNumber": "07700"
};


test('takes in a valid string and searches for persons', (done) => {
    mainSearch.JsonToPersonByMobile(inputPhone)
        .then(([citizen]) => {
            console.log("Advanced Detail Search in order of phone number"
                , citizen);
            initRes = citizen;
            console.log(initRes);
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});