const findPersonByMobile = require("../../../../back-end/middleware/service/PhoneData/findPersonByMobile");

let initRes = [];
let expectedResult = [
    {
        "address": "18 CLIFTON AVENUE, LEYLAND, PR25 3ES",
        "dateOfBirth": "1944-07-08",
        "forenames": "Ryan Guy",
        "network": "Three",
        "phoneNumber": "07700 000020",
        "surname": "Fraser"
    }
];

let inputPhone = {
    "receiverNumber": "07700 000021",
    "callerNumber": "07700 000020"
};
let mobiles = [{
    "phoneNumber": "07700 000021"
}];


test('takes in a valid string and searches for persons', (done) => {
    jest.setTimeout(10000000);
    findPersonByMobile(inputPhone, mobiles)
        .then(([citizen]) => {
            console.log("Advanced Detail Search in order of phone number"
                , citizen);
            initRes = citizen;
            console.log(initRes);
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});