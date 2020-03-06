const {findDetailsByName} = require("../../../../../../back-end/middleware/service/person/background/find_citi_details/findDetailsByName");


let initRes = [];

test('takes in info about a person and searches for phone number', () => {
    findMobileByPerson("", "Stuart", "White", "", "", "", "", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("Not this");
});
