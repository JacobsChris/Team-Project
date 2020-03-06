module.exports = {
    licencePlateValidator: function licencePlateValidator(inputString) {
        if (inputString.replace(/\s/, "").toUpperCase().match(/^[A-Z_]{2}[0-9_]{2}[A-Z_]{3}$/)) {
            return inputString.replace(/\s/, "").replace(/^(.{4})(.{3})(.*)$/, "$1 $2");
        } else return "Invalid Reg No"
    }
};