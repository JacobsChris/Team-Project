function licencePlateValidator(inputString) {
    if (inputString.replace(/\s/, "").toUpperCase().match(/^[A-Z]{2}[0-9]{2}[A-Z]{3}$/)) {
        return inputString.replace(/\s/, "").replace(/^(.{4})(.{6})$/, "$1 $2")
    } else return "Invalid Reg No"
}