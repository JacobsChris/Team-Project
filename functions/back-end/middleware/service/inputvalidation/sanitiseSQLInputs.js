module.exports =
    function (inputStr) {
        if (inputStr.match(/[A-Za-z0-9\s_]'[A-Za-z0-9\s_]/g)) {
            return inputStr.replace(/[A-Za-z0-9\s_]'[A-Za-z0-9\s_],[A-Za-z0-9\s_]''[A-Za-z0-9\s_]/)
        }
    };