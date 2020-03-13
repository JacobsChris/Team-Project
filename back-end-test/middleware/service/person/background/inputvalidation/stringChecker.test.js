const stringChecker = require("../../../../../../back-end/middleware/service/person/background/inputvalidation/stringChecker");

let goodInputString = "hello world";
let badInputString = 1;
let outputString = "\'%hello world%\'";

test("test that inputting a string is accepted and adds wildStr to it", () => {
    expect(stringChecker(goodInputString)).toBe(outputString);
});

test('test that inputting a bad string (ie not a string) throws an error', () => {
    expect(() => {
        stringChecker(badInputString)
    }).toThrowError("Not a string error")
});