const {findIncomingCalls} = require("../../../../../../back-end/middleware/service/person/background/PhoneData/findIncomingCallsByTargetPhoneNumber");

let initRes = [];

test('takes in a phone number and searches for which numbers called it', () => {
    findIncomingCalls("07700%", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toBe("Not this");
});