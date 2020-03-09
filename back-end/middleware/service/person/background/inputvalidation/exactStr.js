
module.exports = {
    /**
     * @author Anthony Wilkinson & chris
     *
     * @function this function takes in an input string that will be used in the sqlauth function and the user wants to search
     * exactly the input in the findBy functions. This places the syntax for the exact search in the MYSQL query
     *
     * @return this returns the input string with the appropriate syntax
     *
     * @requires this function requires an input which is a string
     * */
    addExactStr: function addExactStr(inputString) {
        inputString =  "'"+inputString+"'" ;
        return inputString
    }
};