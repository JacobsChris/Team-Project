const {findOutGoingCalls} = require("../../../../../../back-end/middleware/service/person/background/PhoneData/findOutGoingCallsByTargetPhoneNumber");

let initRes = [];

test('takes in a phone number and searches for which numbers it has called', () => {
    findOutGoingCalls("07700%", 10).then(res => {
        initRes = res;
    });
    expect(initRes).toBe("Not this");
});