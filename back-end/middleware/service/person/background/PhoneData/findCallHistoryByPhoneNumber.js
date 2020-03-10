const findInComingCallsByTargetPhoneNumber = require("./findIncomingCallsByTargetPhoneNumber");
const findOutGoingCallsByTargetPhoneNUmber = require("./findOutGoingCallsByTargetPhoneNumber");
const wildStr = require('../inputvalidation/wildStr.js');


module.exports = {
    findCallHistoryByPhoneNumber: function findCallHistoryByPhoneNumber(phoneNumber, limit) {
        phoneNumber = wildStr.addWildStr(phoneNumber);
        return Promise.all(
            [
                findOutGoingCallsByTargetPhoneNUmber.findOutGoingCalls(phoneNumber, limit),
                findInComingCallsByTargetPhoneNumber.findIncomingCalls(phoneNumber, limit)
            ]
        )
    }
};