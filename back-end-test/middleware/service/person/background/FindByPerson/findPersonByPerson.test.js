const {findPersonByPerson} = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findPersonByPerson");


let initRes = [];

test('takes in info about a person and searches for that person\'s other details??', () => {
    findPersonByPerson("", "Stuart", "White", "", "", "", "", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("Not this");
});