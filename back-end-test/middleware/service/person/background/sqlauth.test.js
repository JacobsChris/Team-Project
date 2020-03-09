const auth = require("../../../../../back-end/middleware/service/person/background/sqlauth");

let initRes = [];
let expectedResult = [{
    "citizenID": 1111269986,
    "dateOfBirth": "1966-12-12",
    "forenames": "Michael",
    "homeAddress": "75 ARNOLD ROAD, LONDON, N15 4JQ",
    "placeOfBirth": "DUNSTABLE",
    "sex": "Male",
    "surname": "Park",
}];

test('tests SQL Auth does stuff', (done) => {
    auth.SQLauthenticate("SELECT * FROM citizen LIMIT 1")
        .then(res => {
            initRes = res;
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});