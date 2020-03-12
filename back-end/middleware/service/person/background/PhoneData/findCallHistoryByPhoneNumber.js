const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");
const exactStr = require('../inputvalidation/exactStr');


module.exports =
    /**
     *
     * @param phoneNumber is the phone number you want the call history of
     * @returns promised arrays of the incoming and outgoing pone calls of the specified phone number
     */
     function findCallHistoryByPhoneNumber(phoneNumber) {
        phoneNumber = exactStr(phoneNumber);
        return Promise.all(
            [
                findOutGoingCallsByTargetPhoneNUmber(phoneNumber),
                findInComingCallsByTargetPhoneNumber(phoneNumber)
            ]
        )

};