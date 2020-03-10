const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");
const exactStr = require('../inputvalidation/exactStr');


module.exports = {
    findCallHistoryByPhoneNumber: function findCallHistoryByPhoneNumber(phoneNumber) {
        phoneNumber = exactStr.addExactStr(phoneNumber);
        return Promise.all(
            [
                findOutGoingCallsByTargetPhoneNUmber.findOutGoingCalls(phoneNumber),
                findInComingCallsByTargetPhoneNumber.findIncomingCalls(phoneNumber)
            ]
        )
    }
};