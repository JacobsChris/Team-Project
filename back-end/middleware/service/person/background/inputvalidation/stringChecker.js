const wildStr = require("./wildStr");

module.exports = {

    /**
     * Used to ensure an input is, in fact, a string and then applies addWildStr if it is a string.
     * If the input is not a string, an error is thrown.
     * @param inputStr is any string
     * @returns '%inputString%'
     */

    stringChecker: function stringChecker(inputStr) {
        if (typeof inputStr != 'string') {
            throw new Error("Not a string error")
        } else {
            inputStr = wildStr.addWildStr(inputStr);
            return inputStr;
        }
    }
};