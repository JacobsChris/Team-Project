const wildStr = require("./wildStr");

module.exports = {

    stringChecker: function stringChecker(inputStr) {
        if (typeof inputStr != 'string') {
            throw new Error("Not a string error")
        } else {
            inputStr = wildStr.addWildStr(inputStr)
        }
    }
};