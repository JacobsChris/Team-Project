const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");
const exactStr = require('../inputvalidation/exactStr');


module.exports = {
    /**
     *
     * @param phoneNumber is the phone number you want the call history of
     * @returns promised arrays of the incoming and outgoing pone calls of the specified phone number
     */
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