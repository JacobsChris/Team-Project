const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");



module.exports =
    /**
     *
     * @param phoneNumber is the phone number you want the call history of
     * @returns promised arrays of the incoming and outgoing pone calls of the specified phone number
     */
     function findCallHistoryByPhoneNumber(input) {
        return Promise.all(
            [
                findOutGoingCallsByTargetPhoneNUmber(input),
                findInComingCallsByTargetPhoneNumber(input)
            ]
        )

};