
const wildStr = require('../inputvalidation/wildStr.js');
const atmID = require('./findATMPointByATM_ID')

module.exports = {
    findATMPointByATMId: function findATMPointByATMId(timestamp,atmId,bankCardNumber,type,amount, limit) {
        if ((typeof atmId != 'string')) {
            console.log("Not string error");
        } else {
            atmId = wildStr.addWildStr(atmId);
            return Promise.all([atmID.findATMPoint(atmId,limit)]);
        }
    }
};