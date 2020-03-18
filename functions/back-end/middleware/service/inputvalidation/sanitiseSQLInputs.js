module.exports =
    function (inputStr) {
        if (inputStr.includes("'")) {
            return inputStr.replace("'", "\\'");
        } else {
            return inputStr;
        }
    };