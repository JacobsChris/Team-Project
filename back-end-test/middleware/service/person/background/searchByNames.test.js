const {searchByNames} = require("../../../../../back-end/middleware/service/person/background/searchByNames");
let initRes = [];

test('takes in a valid string and searches for persons', () => {
    searchByNames("", "Stuart", "White", "", "", "", "", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("");
});