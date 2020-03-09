const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");

module.exports = {
    findCallHistoryByPhoneNumber: function findCallHistoryByPhoneNumber(phoneNumber, limit) {
        return Promise.all(
            [
                findOutGoingCallsByTargetPhoneNUmber.findOutGoingCalls(phoneNumber, limit),
                findInComingCallsByTargetPhoneNumber.findIncomingCalls(phoneNumber, limit)
            ]
        )
    }
};