const wildStr = require("./wildStr");

module.exports =
    /**
     * Used to ensure an input is, in fact, a string and then applies addWildStr if it is a string.
     * If the input is not a string, an error is thrown.
     * @param inputStr is any string
     * @returns '%inputString%'
     */
    function stringChecker(inputStr) {
        try {
            if (typeof inputStr != 'string') {
                throw new Error("Not a string error")
            } else {
                inputStr = wildStr(inputStr);
                return inputStr;
            }
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at string checker');
        }
    };