const mainSearch = require("../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = {
    "citizenID": 5629233377,
    "dateOfBirth": "1952-03-06",
    "forenames": "Gillian Kathryn",
    "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
    "placeOfBirth": "DERBY",
    "sex": "Female",
    "surname": "Newton"
};

let inputPerson = {
    "citizenID": "",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
};


test('takes in a valid string and searches for persons', (done) => {
    jest.setTimeout(10000000);
    mainSearch.JsonToStringName(inputPerson)
        .then(([citizen]) => {
            console.log("Advanced Detail Search in order of citizen"
                , citizen);
            initRes = citizen;
            console.log(initRes);
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});