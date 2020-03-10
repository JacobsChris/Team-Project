module.exports = {
    licencePlateValidator: function licencePlateValidator(inputString) {
        /**
         * @author Chris
         *
         * @function this function takes in an input string.
         * The string is stripped of white space,
         * and then checked against regex pattern matching to ensure it is of the form Letter Letter Number Number Letter Letter.
         * Underscores are acceptable replacements for unknown characters.
         * If the string does not conform to this standard, "Invalid reg no." is returned.
         * If it does match, then a space is inserted after the fourth character.
         *
         * @return this returns the input string with the appropriate syntax
         *
         * @requires this function requires an input which is a string
         * */
        if (inputString.replace(/\s/, "").toUpperCase().match(/^[A-Z_]{2}[0-9_]{2}[A-Z_]{3}$/)) {
            return inputString.replace(/\s/, "").replace(/^(.{4})(.{3})(.*)$/, "\'$1 $2\'");
        } else {
            throw new Error("Not a valid vehicle registration number");
        }
    }
};
