const {findPersonByMobile} = require("../../../../../../back-end/middleware/service/person/background/PhoneData/findPersonByMobile");

let initRes = [];

test('takes in a phone number and searches who owns it', () => {
    findPersonByMobile("07700%", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toBe("Not this");
});