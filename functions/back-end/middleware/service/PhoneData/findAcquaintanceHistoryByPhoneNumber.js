const findAcquaintanceInComingCallsByTargetPhoneNumber = require("./findAcquaintanceIncomingCallsByTargetPhoneNumber");
const findAcquaintanceOutGoingCallsByTargetPhoneNUmber = require("./findAcquaintanceOutGoingCallsByTargetPhoneNumber");


module.exports =
    /**
     *
     * @param input is an object containing the phone number you want the call history of
     * @returns promised arrays of the incoming and outgoing pone calls of the specified phone number
     */
    function findAcquaintanceHistoryByPhoneNumber(input) {
        return Promise.all(
            [
                findAcquaintanceOutGoingCallsByTargetPhoneNUmber(input),
                findAcquaintanceInComingCallsByTargetPhoneNumber(input)
            ]
        )

    };