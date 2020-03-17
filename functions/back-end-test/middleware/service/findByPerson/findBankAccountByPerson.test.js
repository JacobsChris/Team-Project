const findBankAccountByPerson = require("../../../../back-end/middleware/service/FindByPerson/findBankAccountByPerson");


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
    "forenames": "Gillian Kathryn",
    "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
    "surname": "Newton",
    "accountNumber": 75482888,
    "bank": "Citibank International",
    "bankAccountId": 89368,
    "dateOfBirth": "1953-11-07",

};

test('find a person\'s full details from partial details', (done) => {
    findBankAccountByPerson(inputVal)
        .then(([person]) => {
            expect(person).toStrictEqual(outputVal);
            done();
        })
});