const findPersonByPerson = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findPersonByPerson");


let inputVal = {
    "citizenID": "",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
};

let outputVal = {
    "citizenID": 5629233377,
    "dateOfBirth": "1952-03-06",
    "forenames": "Gillian Kathryn",
    "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
    "placeOfBirth": "DERBY",
    "sex": "Female",
    "surname": "Newton"
};

test('find a person\'s full details from partial details', (done) => {
    jest.setTimeout(100000);
    findPersonByPerson(inputVal)
        .then(([person]) => {
            expect(person).toStrictEqual(outputVal);
            done();
        })
});