const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");


module.exports =
    /**
     *
     * @param input is an object containing the phone number you want the call history of
     * @returns promised arrays of the incoming and outgoing pone calls of the specified phone number
     */
    function findCallHistoryByPhoneNumber(input) {
        try {
            return Promise.all(
                [
                    findOutGoingCallsByTargetPhoneNUmber(input),
                    findInComingCallsByTargetPhoneNumber(input)
                ]
            )
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find call history by phone number');
        }

    };