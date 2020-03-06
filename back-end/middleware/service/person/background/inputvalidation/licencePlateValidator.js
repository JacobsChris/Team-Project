module.exports = {
    licencePlateValidator: function licencePlateValidator(inputString) {
        /**
         * @author Chris
         *
         * @function this function takes in an input string
         *
         * @return this returns the input string with the appropriate syntax
         *
         * @requires this function requires an input which is a string
         * */
        if (inputString.replace(/\s/, "").toUpperCase().match(/^[A-Z_]{2}[0-9_]{2}[A-Z_]{3}$/)) {
            return inputString.replace(/\s/, "").replace(/^(.{4})(.{3})(.*)$/, "$1 $2");
        } else return "Invalid Reg No"
    }
};