const findMobileByPerson = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findMobileByPerson");

let inputVal = {
    "citizenID": "",
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
};
let outputVal = [{
    "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
    "dateOfBirth": "1953-11-07",
    "forenames": "Gillian Kathryn",
    "network": "T-Mobile",
    "phoneNumber": "07700 155159",
    "surname": "Newton"
}];


test('find someone\'s mobile form their name', (done) => {
    findMobileByPerson(inputVal).then((mobile) => {
        expect(mobile).toStrictEqual(outputVal);
        done();
    })
});


