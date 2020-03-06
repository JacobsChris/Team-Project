const {findMobileByPerson} = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findMobileByPerson");


let initRes = [];

test('takes in info about a person and searches for phone number', () => {
    findMobileByPerson("", "Stuart", "White", "", "", "", "", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("Not this");
});
