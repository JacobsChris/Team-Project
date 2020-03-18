const findAcquaintanceInComingCallsByTargetPhoneNumber = require("./findAcquaintanceIncomingCallsByTargetPhoneNumber");
const findAcquaintanceOutGoingCallsByTargetPhoneNUmber = require("./findAcquaintanceOutGoingCallsByTargetPhoneNumber");


module.exports =
    /**
     *
     * @param input is an object containing the phone number you want the call history of
     * @returns promised arrays of the incoming and outgoing pone calls of the specified phone number
     */
    function findAcquaintanceHistoryByPhoneNumber(input) {
        try {
            return Promise.all(
                [
                    findAcquaintanceOutGoingCallsByTargetPhoneNUmber(input),
                    findAcquaintanceInComingCallsByTargetPhoneNumber(input)
                ]
            )

        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find acquaintaince history by phone number');
        }
    };