const {findBankAccountByPerson} = require("../../../../../../back-end/middleware/service/person/background/FindByPerson/findBankAccountByPerson");


let initRes = [];

test('takes in info about a person and searches for bank account', () => {
    findBankAccountByPerson("", "Stuart", "White", "", "", "", "", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toStrictEqual("Not this");
});