// const searchByNames = require("../../../../../back-end/middleware/service/person/background/searchByNames");
//
// let initRes = [];
// let expectedResult = {
//     "citizenID": 5629233377,
//     "dateOfBirth": "1952-03-06",
//     "forenames": "Gillian Kathryn",
//     "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
//     "placeOfBirth": "DERBY",
//     "sex": "Female",
//     "surname": "Newton"
// };
//
// let inputPerson = {
//     "citizenID": "",
//     "forenames": "Gillian Kathryn",
//     "surname": "Newton",
//     "homeAddress": "",
//     "dateOfBirth": "",
//     "placeOfBirth": "",
//     "sex": ""
// };
//
//
// test('takes in a valid string and searches for persons', (done) => {
//     jest.setTimeout(10000000);
//     searchByNames(inputPerson)
//         .then(([citizen]) => {
//             initRes = citizen;
//             expect(initRes).toStrictEqual(expectedResult);
//             done();
//         });
// });
//
// let badInputPerson = {
//     "citizenID": 1,
//     "forenames": 1,
//     "surname": 1,
//     "homeAddress": 1,
//     "dateOfBirth": 1,
//     "placeOfBirth": 1,
//     "sex": 1
// };
//
//
// test('takes in an invalid input and expects a thrown error', async () => {
//     try {
//         await searchByNames(badInputPerson);
//         throw 'This shouldn\'t have gotten here';
//     } catch (err) {
//         expect(err).toBeTruthy();
//         expect(err.message).toEqual('Not a string error');
//     }
// });